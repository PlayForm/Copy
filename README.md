

# Nx-Plugins

## Progress

**WIP**

Once it got accomplished, you can run commands below to enjoy enhanced monorepo workflow by [@nrwl/nx](https://nx.dev/)

([pnpm](https://github.com/pnpm/pnpm) is recommended as package manager in nx project.)

```bash
npm i nx-plugin-typegraphql -D
npm i nx-plugin-midway -D
npm i nx-plugin-prisma -D
npm i nx-plugin-esbuild -D
npm i nx-plugin-swc -D
npm i nx-plugin-vite
npm i nx-plugin-umi
npm i nx-plugin-ice
npm i nx-plugin-serverless

# generator only
nx g nx-plugin-typegraphql:resolver user --fields
nx g nx-plugin-midway:application midway-graphql-demo --graphql --typeorm
nx g nx-plugin-prisma:application prisma-app --graphql --sqlite

# generator + executor
nx g nx-plugin-esbuild:setup exist-app --target build-esbuild --watch
nx build-esbuild exist-app

nx g nx-plugin-swc:setup exist-app --target build-swc --watch
nx build-swc exist-app

nx g nx-plugin-vite:application vite-app --template react-tsx
nx vite-serve vite-app

nx g nx-plugin-umi:application umi-app
nx umi-serve umi-app

nx g nx-plugin-ice:application ice-app
nx ice-serve ice-app
```

## Packages

> Plugins which contain only generators.

- `nx-plugin-typegraphql`:
- ?

> Plugins which contain both executors and generators.

- `nx-plugin-midway`:
- `nx-plugin-prisma`:
- `nx-plugin-serverless`:

- `nx-plugin-esbuild`:
- `nx-plugin-swc`:
- `nx-plugin-vite`:
- `nx-plugin-umi`:
- `nx-plugin-ice`:

> Useful utilities in Nx plugin development.

- `nx-plugin-devkit`

### ESBuild-Plugins

- `esbuild-plugin-decorator`:
- `esbuild-plugin-node-externals`:
- `esbuild-plugin-ignore`
- `esbuild-plugin-graphql`
- `esbuild-plugin-filesize`
- `esbuild-plugin-hash`
- `esbuild-plugin-static-site`
- `esbuild-plugin-circular-deps`
- `esbuild-plugin-notifier`



## Global Progress

- [ ] Release 0.1.0 for all plugins.
- [ ] Detailed documentation for all plugins. (README file will only include links to packages README)
- [ ] Refactor all plugins for `nx-plugin-devkit`



## Plugins

### nx-plugin-typegraphql

#### generators

- [x] ObjectType
  - [ ] Props
- [x] Resolver
- [x] Middleware
  - [x] Class
  - [x] Functional
- [x] Utils(Directive / Extension / Plugin / Scalar / Decorator)
- [ ] Full Application
  - [ ] Apollo + TypeGraphQL Minimal
  - [ ] Apollo + TypeGraphQL Full-Featured
  - [ ] Nest + TypeGraphQL Minimal
  - [ ] Nest + TypeGraphQL Full-Featured
  - [ ] Midway + TypeGraphQL



### nx-plugin-midway

#### generators

- [ ] Application
  - [ ] REST / GraphQL
  - [ ] TypeORM / Prisma
- [ ] Controller
- [ ] Service
- [ ] Middleware
- [ ] Component
- [ ] Interceptor
- [ ] Integration
  - [ ] Midway-Serverless
  - [ ] Midway-Hooks



#### executors

- [ ] serve (midway-bin dev)
- [ ] build (midway-bin build)
- [ ] deploy (pm2 / serverless)



### nx-plugin-prisma

#### generators

- [ ] Schema
- [ ] Application
  - [ ] REST / GraphQL
  - [ ] Vanilla NodeJS / NestJS



### executors



### nx-plugin-esbuild

#### generators

- [ ] Init (Create new project)

- [ ] Setup (Add ESBuild commands for existing project)



### executors

- [ ] build
- [ ] serve



### nx-plugin-swc

#### generators

- [ ] Init (Create new project)

- [ ] Setup (Add SWC commands for existing project)



### executors

- [ ] build
- [ ] serve



### nx-plugin-vite

> **Experimental**

#### generators

- [ ] Application
  - [ ] React / Vue
  - [ ] GraphQL (Apollo-Client)

- [ ] Setup(convert exist React / Vue project)

### executors

- [ ] serve (vite)
- [ ] build (vite build)
- [ ] preview (vite preview)



### nx-plugin-umi

> **Experimental**

#### generators



### executors



### nx-plugin-ice

> **Experimental**

#### generators



### executors



### Possible Plugins

- nx-plugin-snowpack
- nx-plugin-vuepress
- nx-plugin-dumi



## ESBuild-Plugins

### esbuild-plugin-decorator

> When TypeScript decorators are detected, use tsc for file compilation.

Inspired by [@anatine/esbuild-decorators](https://github.com/anatine/esbuildnx/tree/main/packages/esbuild-decorators)

### esbuild-plugin-node-externals

> Find and register all external modules to esbuild build.externals.

Inspired by [esbuild-node-externals](https://github.com/pradel/esbuild-node-externals)

### esbuild-plugin-ignore

> Ignore deps in building.

Inspired by [Webpack IgnorePlugin](https://webpack.js.org/plugins/ignore-plugin/)

### esbuild-plugin-graphql

> `.graphql` / `.gql` file import support.

Insipred by [vite-plugin-graphql](https://github.com/hronro/vite-plugin-graphql)

### esbuild-plugin-filesize

> Display filesize after build.

Inspired by [rollup-plugin-filesize](https://github.com/ritz078/rollup-plugin-filesize)

### esbuild-plugin-hash

> Unique hashes generated by output file.

Inspired by [rollup-plugin-hash](https://github.com/phamann/rollup-plugin-hash)

### esbuild-plugin-static-site

> Html template + script insert made easy.

Inspired by [html-webpack-plugin]() + [rollup-plugin-static-site](https://gitlab.com/thekelvinliu/rollup-plugin-static-site)

### esbuild-plugin-circular-deps

> Check circular deps.

Inspired by [circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin)

### esbuild-plugin-notifier

> OS level notifications for building.

Inspired by [webpack-build-notifier](https://github.com/RoccoC/webpack-build-notifier)
