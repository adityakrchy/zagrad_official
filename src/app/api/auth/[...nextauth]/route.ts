import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from 'next-auth/providers/google'
const Options: AuthOptions = {
    providers: [
        GoogleProvider(
            {
                clientId: process.env.GOOGLE_CLIENT_ID as string,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            }
        )
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(Options)

export { handler as GET, handler as POST }
export {Options}