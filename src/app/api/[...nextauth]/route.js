import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/libs/prisma'



export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          name: { label: "Name", type: "text", placeholder: "jsmith" },
          password: { label: "Password", type: "password", placeholder: "*****" },
        },
        async authorize(credentials, req) {
          console.log(credentials)
  
          const userFound = await prisma.user.findUnique({
              where: {
                  name: credentials.name
              }
          })
  
          if (!userFound) throw new Error('No user found')
  
          console.log(userFound)
  
          
  
          if (!matchPassword) throw new Error('Wrong password')
  
          return {
              id: userFound.id,
              name: userFound.name,
              
          }
        },
      }),
    ],
    pages: {
      signIn: "/authview",
    }
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };