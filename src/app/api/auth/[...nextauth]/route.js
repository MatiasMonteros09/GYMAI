import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import db from "@/libs/db"
import bcrypt from "bcrypt"


export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password", placeholder: "*****" },
        },
        async authorize(credentials) {
          // console.log(credentials)
        
          const userFound = await db.user.findUnique({
              where: {
                  email: credentials.email
              }
          })
  
          if (!userFound) throw new Error('No user found')
  
          // console.log(userFound)
  
          const matchPassword = await bcrypt.compare(credentials.password, userFound.password)
  
          if (!matchPassword) throw new Error('Wrong password')
  
          return {
              id: userFound.id,
              name: userFound.username,
              email: userFound.email,
              
          }
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      })
    ],
    pages: {
      signIn: "/authview",
    }
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };