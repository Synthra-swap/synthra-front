import { ChainId } from '@synthra-swap/sdk-core'
import { Connection } from 'connection/types'
import { atom, useAtomValue, useSetAtom } from 'jotai'
import { useCallback } from 'react'
import { useAppDispatch } from 'state/hooks'
import { updateSelectedWallet } from 'state/user/reducer'

import { didUserReject } from './utils'

export enum ActivationStatus {
  PENDING,
  ERROR,
  IDLE,
}

type ActivationPendingState = { status: ActivationStatus.PENDING; connection: Connection }
type ActivationErrorState = { status: ActivationStatus.ERROR; connection: Connection; error: any }
const IDLE_ACTIVATION_STATE = { status: ActivationStatus.IDLE } as const
type ActivationState = ActivationPendingState | ActivationErrorState | typeof IDLE_ACTIVATION_STATE

const activationStateAtom = atom<ActivationState>(IDLE_ACTIVATION_STATE)

function useTryActivation() {
  const dispatch = useAppDispatch()
  const setActivationState = useSetAtom(activationStateAtom)

  return useCallback(
    async (connection: Connection, onSuccess: () => void, chainId?: ChainId) => {
      // Skips wallet connection if the connection should override the default
      // behavior, i.e. install MetaMask or launch Coinbase app
      if (connection.overrideActivate?.(chainId)) return

      try {
        setActivationState({ status: ActivationStatus.PENDING, connection })

        console.debug(`Connection activating: ${connection.getName()}`)
        dispatch(updateSelectedWallet({ wallet: undefined }))
        await connection.connector.activate()

        console.debug(`Connection activated: ${connection.getName()}`)
        dispatch(updateSelectedWallet({ wallet: connection.type }))

        // Clears pending connection state
        setActivationState(IDLE_ACTIVATION_STATE)

        onSuccess()
      } catch (error) {
        // Gracefully handles errors from the user rejecting a connection attempt
        if (didUserReject(connection, error)) {
          setActivationState(IDLE_ACTIVATION_STATE)
          return
        }

        // TODO(WEB-1859): re-add special treatment for already-pending injected errors & move debug to after didUserReject() check
        console.debug(`Connection failed: ${connection.getName()}`)
        console.error(error)

        setActivationState({ status: ActivationStatus.ERROR, connection, error })
      }
    },
    [dispatch, setActivationState]
  )
}

function useCancelActivation() {
  const setActivationState = useSetAtom(activationStateAtom)
  return useCallback(
    () =>
      setActivationState((activationState) => {
        if (activationState.status !== ActivationStatus.IDLE) activationState.connection.connector.deactivate?.()
        return IDLE_ACTIVATION_STATE
      }),
    [setActivationState]
  )
}

export function useActivationState() {
  const activationState = useAtomValue(activationStateAtom)
  const tryActivation = useTryActivation()
  const cancelActivation = useCancelActivation()

  return { activationState, tryActivation, cancelActivation }
}
