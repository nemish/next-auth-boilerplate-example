This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It also includes boilerplate for [next-auth](https://next-auth.js.org/) with Twitter and Google as OAuth providers. Database connection in this example runs by [Prisma](https://www.prisma.io/) on top of Postgres.

This is a result repo of [this-small-tutorial](https://yaraoncode.me/post/building-next-js-app-with-next-auth-and-prisma-on-top-postgres)

## How to run an example

```bash
docker pull postgres:12.3-alpine
cp .env.local.example .env.local
# Fill necessary providers secrets with the ones got from Twitter and Google
cp .env.example .env
yarn
yarn start-db
npx prisma migrate dev --preview-feature
yarn dev
```
