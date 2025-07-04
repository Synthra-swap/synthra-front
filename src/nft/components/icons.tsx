import React from 'react'
import vanaLogoUrl from 'assets/images/syntra-logo.png'

import { themeVars } from '../css/sprinkles.css'

// ESLint reports `fill` is missing, whereas it exists on an SVGProps type
type SVGProps = React.SVGProps<SVGSVGElement> & {
  fill?: string
  height?: string | number
  width?: string | number
  gradientId?: string
}

export const VanaIcon = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    zoomAndPan="magnify"
    viewBox="0 0 810 809.999993"
    height="50"
    preserveAspectRatio="xMidYMid meet"
    version="1.0"
  >
    <defs>
      <clipPath id="bc92fee02d">
        <path d="M 104 17 L 706.632812 17 L 706.632812 793 L 104 793 Z M 104 17 " clipRule="nonzero" />
      </clipPath>
      <image
        x="0"
        y="0"
        width="1472"
        xlinkHref={vanaLogoUrl}
        id="cf901cc3f6"
        height="1896"
        preserveAspectRatio="xMidYMid meet"
      />
      <mask id="4936321159">
        <g filter="url(#b71a1dc16a)">
          <g filter="url(#32a07da753)" transform="matrix(0.409647, 0, 0, 0.409415, 103.632949, 16.765507)">
            <image
              x="0"
              y="0"
              width="1472"
              xlinkHref={vanaLogoUrl}
              height="1896"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        </g>
      </mask>
      <image
        x="0"
        y="0"
        width="1472"
        xlinkHref={vanaLogoUrl}
        id="e2d720a2a3"
        height="1896"
        preserveAspectRatio="xMidYMid meet"
      />
    </defs>
    <g clipPath="url(#bc92fee02d)">
      <g>
        <g transform="matrix(0.409647, 0, 0, 0.409415, 103.632949, 16.765507)">
          <image
            x="0"
            y="0"
            width="1472"
            xlinkHref={vanaLogoUrl}
            height="1896"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </g>
    </g>
  </svg>
)

export const VanaDarkIcon = (props: SVGProps) => (
  <svg width="50" height="50" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0H500V500H0V0Z" fill="url(#pattern0_419_43)" />
    <defs>
      <pattern id="pattern0_419_43" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlinkHref="#image0_419_43" transform="scale(0.000925926)" />
      </pattern>
      <image
        id="image0_419_43"
        width="1080"
        height="1080"
        xlinkHref={vanaLogoUrl}
      />
    </defs>
  </svg>
)

export const ChevronUpIcon = ({
  secondaryColor,
  secondaryWidth,
  secondaryHeight,
  ...props
}: SVGProps & { secondaryWidth?: string; secondaryHeight?: string; secondaryColor?: string }) => (
  <svg
    width={secondaryWidth || '29'}
    height={secondaryHeight || '28'}
    viewBox="0 0 29 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_564_11230)">
      <path
        d="M7.2207 16.0615L13.9092 9.22363C14.1377 8.97754 14.4102 8.86328 14.7178 8.86328C15.0254 8.86328 15.3066 8.98633 15.5352 9.22363L22.2148 16.0615C22.4082 16.2549 22.5137 16.501 22.5137 16.791C22.5137 17.3799 22.0566 17.8369 21.4766 17.8369C21.1953 17.8369 20.9229 17.7314 20.7207 17.5205L14.7266 11.3594L8.71484 17.5205C8.52148 17.7227 8.24902 17.8369 7.95898 17.8369C7.37891 17.8369 6.92188 17.3799 6.92188 16.791C6.92188 16.5098 7.02734 16.2549 7.2207 16.0615Z"
        fill={secondaryColor || themeVars.colors.neutral2}
      />
    </g>
    <defs>
      <clipPath id="clip0_564_11230">
        <rect width="28" height="28" fill="white" transform="translate(0.716797)" />
      </clipPath>
    </defs>
  </svg>
)

export const EllipsisIcon = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M10 10.8334C10.4603 10.8334 10.8334 10.4603 10.8334 10C10.8334 9.53978 10.4603 9.16669 10 9.16669C9.5398 9.16669 9.16671 9.53978 9.16671 10C9.16671 10.4603 9.5398 10.8334 10 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.8334 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10C16.6667 9.53978 16.2936 9.16669 15.8334 9.16669C15.3731 9.16669 15 9.53978 15 10C15 10.4603 15.3731 10.8334 15.8334 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16671 10.8334C4.62694 10.8334 5.00004 10.4603 5.00004 10C5.00004 9.53978 4.62694 9.16669 4.16671 9.16669C3.70647 9.16669 3.33337 9.53978 3.33337 10C3.33337 10.4603 3.70647 10.8334 4.16671 10.8334Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const DiscordIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.0325 6.95914C16.0748 6.51107 15.0508 6.18542 13.9802 6C13.8487 6.23771 13.6951 6.55743 13.5892 6.81177C12.4512 6.64062 11.3236 6.64062 10.2065 6.81177C10.1006 6.55743 9.94354 6.23771 9.81089 6C8.73916 6.18542 7.71399 6.51226 6.7563 6.96152C4.82465 9.8805 4.30101 12.727 4.56283 15.5331C5.844 16.4898 7.08562 17.071 8.30628 17.4513C8.60767 17.0365 8.87646 16.5956 9.10803 16.1309C8.66701 15.9633 8.24461 15.7565 7.84549 15.5164C7.95137 15.438 8.05494 15.356 8.15501 15.2716C10.5894 16.4102 13.2343 16.4102 15.6396 15.2716C15.7408 15.356 15.8444 15.438 15.9491 15.5164C15.5488 15.7577 15.1253 15.9645 14.6842 16.1321C14.9158 16.5956 15.1834 17.0377 15.486 17.4525C16.7078 17.0722 17.9506 16.491 19.2318 15.5331C19.539 12.2801 18.707 9.45977 17.0325 6.95914ZM9.43967 13.8074C8.70891 13.8074 8.10962 13.1251 8.10962 12.2944C8.10962 11.4636 8.69611 10.7802 9.43967 10.7802C10.1833 10.7802 10.7825 11.4624 10.7697 12.2944C10.7709 13.1251 10.1833 13.8074 9.43967 13.8074ZM14.3549 13.8074C13.6242 13.8074 13.0249 13.1251 13.0249 12.2944C13.0249 11.4636 13.6113 10.7802 14.3549 10.7802C15.0985 10.7802 15.6978 11.4624 15.685 12.2944C15.685 13.1251 15.0985 13.8074 14.3549 13.8074Z"
      fill="currentColor"
    />
  </svg>
)

export const TwitterIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M18.955 7.34849C18.4393 7.57725 17.885 7.73179 17.3033 7.80132C17.897 7.44542 18.3531 6.88184 18.5678 6.21026C18.012 6.53989 17.3966 6.77916 16.7415 6.90812C16.217 6.34918 15.4695 6 14.6424 6C13.0542 6 11.7665 7.28758 11.7665 8.87576C11.7665 9.10117 11.7919 9.32068 11.841 9.53116C9.45084 9.41124 7.33181 8.26628 5.91338 6.52636C5.66583 6.95109 5.52397 7.44507 5.52397 7.97213C5.52397 8.96989 6.03168 9.85012 6.80335 10.3658C6.33194 10.3509 5.8885 10.2215 5.50077 10.0061C5.50044 10.0181 5.50044 10.0302 5.50044 10.0423C5.50044 11.4356 6.49176 12.5979 7.80738 12.8623C7.56607 12.928 7.312 12.9631 7.04973 12.9631C6.86442 12.9631 6.6843 12.9451 6.50866 12.9116C6.87465 14.054 7.93669 14.8855 9.19518 14.9086C8.21094 15.68 6.97095 16.1398 5.62352 16.1398C5.39139 16.1398 5.16248 16.1261 4.9375 16.0996C6.21022 16.9156 7.72187 17.3917 9.34594 17.3917C14.6357 17.3917 17.5284 13.0096 17.5284 9.20917C17.5284 9.08449 17.5256 8.9605 17.52 8.83708C18.0819 8.43169 18.5694 7.92524 18.955 7.34849H18.955Z"
      fill="currentColor"
    />
  </svg>
)

export const GithubIconMenu = (props: SVGProps) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.25C8.27062 5.25 5.25 8.34703 5.25 12.1707C5.25 15.2332 7.18219 17.8198 9.86531 18.7368C10.2028 18.7973 10.3294 18.5897 10.3294 18.408C10.3294 18.2437 10.3209 17.6987 10.3209 17.1191C8.625 17.4391 8.18625 16.6952 8.05125 16.3059C7.97531 16.1069 7.64625 15.4927 7.35938 15.3283C7.12312 15.1986 6.78562 14.8785 7.35094 14.8698C7.8825 14.8612 8.26219 15.3716 8.38875 15.5792C8.99625 16.626 9.96656 16.3318 10.3547 16.1502C10.4138 15.7003 10.5909 15.3975 10.785 15.2245C9.28312 15.0515 7.71375 14.4546 7.71375 11.8074C7.71375 11.0548 7.97531 10.4319 8.40563 9.94745C8.33812 9.77443 8.10187 9.06505 8.47312 8.11345C8.47312 8.11345 9.03844 7.93178 10.3294 8.82283C10.8694 8.66711 11.4431 8.58925 12.0169 8.58925C12.5906 8.58925 13.1644 8.66711 13.7044 8.82283C14.9953 7.92313 15.5606 8.11345 15.5606 8.11345C15.9319 9.06505 15.6956 9.77443 15.6281 9.94745C16.0584 10.4319 16.32 11.0461 16.32 11.8074C16.32 14.4632 14.7422 15.0515 13.2403 15.2245C13.485 15.4408 13.6959 15.856 13.6959 16.5048C13.6959 17.4305 13.6875 18.1745 13.6875 18.408C13.6875 18.5897 13.8141 18.806 14.1516 18.7368C16.8178 17.8198 18.75 15.2245 18.75 12.1707C18.75 8.34703 15.7294 5.25 12 5.25Z"
      fill="currentColor"
    />
  </svg>
)

export const CheckMarkIcon = (props: SVGProps) => (
  <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16.6693 5.33789L7.5026 14.3175L3.33594 10.2358"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
