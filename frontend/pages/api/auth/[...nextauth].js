import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: "19483234419-gcokit2ms0vi3ok044i751gebt02lcrm.apps.googleusercontent.com",
      clientSecret: "MFUrnLxip-dE_bQdr7ue1pAt"
    }),
    // ...add more providers here
  ],
  
//   // A database is optional, but required to persist accounts in a database
//   database: process.env.DATABASE_URL,
})