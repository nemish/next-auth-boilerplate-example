import { NextApiHandler } from "next";
import NextAuth, { InitOptions } from "next-auth";
import Adapters from "next-auth/adapters";
import Providers from "next-auth/providers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options: InitOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
