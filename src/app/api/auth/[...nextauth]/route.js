import NextAuth from "next-auth"

export default authOptions = {
    providers: []
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }