# healthcheck-cli

[![npm version](https://img.shields.io/npm/v/healthcheck-cli.svg)](https://www.npmjs.com/package/healthcheck-cli)
[![npm downloads](https://img.shields.io/npm/dm/healthcheck-cli.svg)](https://www.npmjs.com/package/healthcheck-cli)
[![Maintainability](https://api.codeclimate.com/v1/badges/7d2accb39a80b8ee6573/maintainability)](https://codeclimate.com/github/lgaticaq/healthcheck-cli/maintainability)
[![devDependency Status](https://img.shields.io/david/dev/lgaticaq/healthcheck-cli.svg)](https://david-dm.org/lgaticaq/healthcheck-cli#info=devDependencies)

> Minimal CLI for check healthcheck in node apps with docker

## Use

Install `healtcheck-cli` as global dependency and add `HEALTHCHECK` instruction.

## Example

```Dockerfile
FROM node:8-onbuild

RUN npm i -g healtcheck-cli

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s \
  CMD healtcheck 127.0.0.1 3000 /healthcheck
```

## Licencia

[MIT](https://tldrlegal.com/license/mit-license)
