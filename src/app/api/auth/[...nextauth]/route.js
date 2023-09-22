import  connectMongoDB  from "@/db/dbConnect";
import bcrypt from 'bcryptjs';

import ServiceProvider from "@/models/serviceProvider";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

// Import statements

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
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
    async signUp({ serviceProvider }) {
      const hashedPassword = await bcrypt.hash(serviceProvider.password, 10);
      try {
        // Hash the password before saving it in the database
        // const hashedPassword = await hashPassword(serviceProvider.password);
        await ServiceProvider.create({
          email: serviceProvider.email,
          phone: serviceProvider.phone,
          password: hashedPassword,
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

connectMongoDB();
