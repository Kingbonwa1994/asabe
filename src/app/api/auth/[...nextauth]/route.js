import connectMongoDB  from "@/db/dbConnect";
import ServiceProvider from "@/models/serviceProvider";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"

// Import statements

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const res = await fetch("/your/endpoint", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
    
          // If no error and we have user data, return it
          if (res.ok && user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
  ],
  callbacks: {
    async signIn({ serviceProvider, account }) {
      if (account.provider === 'google') {
        const { email, phone } = serviceProvider;
        try {
          const serviceProviderExists = await ServiceProvider.findOne({ email });

          if (!serviceProviderExists) {
            const res = await fetch('http://localhost:3000/api/serviceProvider', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phone,
                email,
              }),
            });

            if (res.ok) {
              const data = await res.json();
              if (data.success) {
                return serviceProvider;
              } else {
                console.error('Failed to create serviceProvider:', data.msg);
              }
            } else {
              console.error('Failed to create serviceProvider:', res.status);
            }
          }
        } catch (error) {
          console.error('Error during sign-in:', error);
        }
      }

      return serviceProvider;
    },
  },
  session: {
    jwt: true,
  },
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/app/login',
    signUp: ''
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }

connectMongoDB();
