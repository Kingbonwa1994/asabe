import { connectMongoDB } from "@/db/dbConnect";
import ServiceProvider from "@/models/serviceProvider";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ serviceProvider, account }) {
      if (account.provider === "google") {
        const { email, phone } = serviceProvider;
        try {
          await connectMongoDB();
          const serviceProviderExists = await ServiceProvider.findOne({ email });

          if (!serviceProviderExists) {
            const res = await fetch("http://localhost:3000/api/serviceProvider", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                phone,
                email,
              }),
            });

            if (res.ok) {
              return serviceProvider;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }

      return serviceProvider;
    },
    async signUp({ serviceProvider }) {
      try {
        await ServiceProvider.create({
          email: serviceProvider.email,
          phone: serviceProvider.phone,
          password: serviceProvider.password,
          services: serviceProvider.services,
          // Add any other serviceProvider information you want to save in MongoDB
        });
        return true;
      } catch (error) {
        console.error('Error creating serviceProvider:', error);
        return false;
      }
    },
  },
  session: {
    jwt: true,
  },
  debug: process.env.NODE_ENV === 'development',
  pages: {
    signIn: '/auth/signin',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };