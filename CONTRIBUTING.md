# Contributing

Thank you for your interest in contributing to the The Synthra! 🐎

# Development

Before running anything, you'll need to install the dependencies:

```
yarn install
```

## Running the interface locally

```
yarn start
```

The interface should automatically open. If it does not, navigate to [http://localhost:3000].

## Creating a production build

Build The Synthra docker
```
docker build -f Dockerfile . -t The Synthra
```

Deploy to IPFS (requires running local IPFS node with the API exposed on default port, IPFS Desktop is sufficient)
```
docker container run --rm -it The Synthra
```

The last line of the output should say:
```
added bafyb... export
```

Given that you are hosting IPFS gateway at localhost:8081, you can then navigate to [bafyb....ipfs.localhost:8081] to interact with The Synthra.

## Running unit tests

```
yarn test
```

By default, this runs only unit tests that have been affected since the last commit. To run _all_ unit tests:

```
yarn test --watchAll
```
