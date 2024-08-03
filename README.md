<p align="center"> 
  <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" height="80" alt="Nest Logo" /></a> <a href="https://prettier.io/" target="blank"><img src="https://raw.githubusercontent.com/prettier/prettier/main/website/static/icon.png" height="80" alt="Prettier Logo" /></a> 
  <a href="https://eslint.org/" target="blank"><img src="https://raw.githubusercontent.com/eslint/archive-website/e19d0bd4b5c116996f4cd94d4e90df5cc4367236/assets/img/logo.svg" height="80" alt="ESLint Logo" /></a> 
  <a href="https://docs.docker.com/" target="blank"><img src="https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png" height="80" alt="Docker Logo" /></a> </p> <p align="center"> 
  <a href="https://github.com/features/actions" target="blank"><img src="https://avatars.githubusercontent.com/u/44036562" height="80" alt="GitHub Actions Logo" /></a> 
  <a href="https://cloud.digitalocean.com/kubernetes" target="blank"><img src="https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.png" height="80" alt="Kubernetes Logo" /></a> 
  <a href="https://commitlint.js.org/" target="blank"><img src="https://commitlint.js.org/assets/icon.png" height="80" alt="CommitLint Logo" /></a> 
  <a href="https://semantic-release.gitbook.io/semantic-release/" target="blank"><img src="https://raw.githubusercontent.com/semantic-release/semantic-release/master/media/semantic-release-logo.svg" height="80" alt="Semantic Release Logo" /></a> 
</p>

## Description

[Nest](https://github.com/nestjs/nest) boilerplate with [Typescript](https://www.typescriptlang.org/) 🎶, fully CI-CD with [GitHub Action](https://github.com/features/actions) 🏃‍♂️ and [DOKS](https://cloud.digitalocean.com/kubernetes) 🐳

## Setup Github Action Secret

- Create a personal access token with `write:packages` scope [here](https://github.com/settings/tokens/new?scopes=write:packages,repo).
- Add a secret `PAT` with above value

## Setup DOC

- Install DOCTL [here](https://cloud.google.com/sdk/docs/install)
```bash
# Install doctl
$ brew install doctl

# Authenticate doctl with your DigitalOcean account
$ doctl auth init
```

## Setup DOCKS
- Create Digital Ocean Apikey [here](https://cloud.digitalocean.com/account/api/tokens) then add `DIGITALOCEAN_ACCESS_TOKEN` to Github Action Secret

- Create cluster
```bash
 # Create a Kubernetes cluster
$ doctl kubernetes cluster create <DOC_CLUSTER_NAME> --region <REGION> --version <VERSION> --node-pool "name=<POOL_NAME>;size=<NODE_SIZE>;count=<NODE_COUNT>"
```

- Create container registry
```bash
# Create a container registry
$ doctl registry create <REGISTRY_NAME>
```

- Add `DOC_CLUSTER_NAME`, `DOC_DEPLOYMENT_NAME` and `REGISTRY_NAME`, to Github Action Secret

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn start
$ yarn test:e2e

# test coverage
$ yarn test:cov
```