# undeclared-identifiers change log

All notable changes to this project will be documented in this file.

This project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.5](https://github.com/unabandoned/undeclared-identifiers/compare/undeclared-identifiers-v1.1.4...undeclared-identifiers-v1.1.5) (2026-08-15)


### Dependencies & maintenance

* add .unabandoned.yml dashboard metadata ([#3](https://github.com/unabandoned/undeclared-identifiers/issues/3)) ([ced114c](https://github.com/unabandoned/undeclared-identifiers/commit/ced114ca582e4588babf60e06149b6906b0b95c9))
* drop abandoned simple-concat for node:stream/consumers ([#7](https://github.com/unabandoned/undeclared-identifiers/issues/7)) ([f4f0b6a](https://github.com/unabandoned/undeclared-identifiers/commit/f4f0b6a00a3991c81f46d8cbc5b6fe0cd9ff94b1))
* pin reusable workflows to the @unabandoned/.github v1.0.0 release ([#5](https://github.com/unabandoned/undeclared-identifiers/issues/5)) ([1929a00](https://github.com/unabandoned/undeclared-identifiers/commit/1929a00dc289ed62d10092e887d49cfaad604d74))

## [1.1.4](https://github.com/unabandoned/undeclared-identifiers/compare/undeclared-identifiers-v1.1.3...undeclared-identifiers-v1.1.4) (2026-08-14)


### Dependencies & maintenance

* fix npm scripts ([a8814f0](https://github.com/unabandoned/undeclared-identifiers/commit/a8814f0445b4853a6e9c2baad42f8c8be58cefb2))
* onboard undeclared-identifiers into the unabandoned program ([#1](https://github.com/unabandoned/undeclared-identifiers/issues/1)) ([6ec2fe2](https://github.com/unabandoned/undeclared-identifiers/commit/6ec2fe267526db6380dc5e230c5506f7effd100a))
* update matrix ([e96dcb0](https://github.com/unabandoned/undeclared-identifiers/commit/e96dcb0eed1d014f4519c8a0b55093cb550c7240))
* use github actions ([e22d077](https://github.com/unabandoned/undeclared-identifiers/commit/e22d077eb3cbd5cb7954014cc343725ce704a99f))

## 1.1.3
*  Do not count class names and method names as undeclared. ([#1](https://github.com/goto-bus-stop/undeclared-identifiers/pull/1))

## 1.1.2
* Fix wildcard use not being detected after property use. ([349d998](https://github.com/goto-bus-stop/undeclared-identifiers/commit/349d998559f83976ccd3b3d091e2b06f00ce4189))

## 1.1.1
* Fix standard property access being detected as wildcards. ([029a0b7](https://github.com/goto-bus-stop/undeclared-identifiers/commit/029a0b773a7a4d2402a6de19c8c8693407f8da63))

## 1.1.0
* Accept an AST. ([1605b88](https://github.com/goto-bus-stop/undeclared-identifiers/commit/1605b881cd567894fab1ee2727961dd715a38820))
* Add `opts.wildcard`. ([cdabd70](https://github.com/goto-bus-stop/undeclared-identifiers/commit/cdabd70e000b2fa976c7f4118757736e023b93f2))

## 1.0.0

* initial release.
