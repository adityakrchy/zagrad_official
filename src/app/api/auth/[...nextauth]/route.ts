import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../../../../../prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

const Options: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }
        ),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "someone@example.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials): Promise<any> {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                await prisma.$connect()
                try {
                    const exists = await prisma.user.findUnique({
                        where: {
                            email: credentials.email
                        }
                    })

                    if (!exists) {
                        throw new Error("Invalid Credentials")
                        return null;
                    }
                    const validPassword = await bcrypt.compare(credentials.password, exists.hashedPassword!)
                    if (!validPassword) {
                        throw new Error("Invalid Credentials.")
                        return null;
                    }

                    return exists;
                } catch (error) {
                    console.log(error)
                    return NextResponse.json({ message: "Internal Server Error." })
                } finally {
                    await prisma.$disconnect()
                }


            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: true
}

const handler = NextAuth(Options)

export { handler as GET, handler as POST }
export { Options }