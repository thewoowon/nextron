import NextAuth, { ISODateString } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { FirestoreAdapter } from '@next-auth/firebase-adapter'
import CredentialsProvider from 'next-auth/providers/credentials'
import NaverProvider from 'next-auth/providers/naver'
import { app } from '../../../firebase/firebase'

export interface CustomDefaultSession {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
  expires: ISODateString
  id?: string
}

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      id: 'google',
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID ?? '',
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET ?? '',
    // }),
    NaverProvider({
      id: 'naver',
      clientId: process.env.NAVER_CLIENT_ID ?? '',
      clientSecret: process.env.NAVER_CLIENT_SECRET ?? '',
    }),
  ],

  adapter: FirestoreAdapter({
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  }),
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  callbacks: {
    session: async ({ session, token, user }) => {
      const newSession = session as CustomDefaultSession
      newSession.id = token.sub
      return Promise.resolve(newSession)
    },
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      const isSignIn = user ? true : false
      return Promise.resolve(token)
    },
  },
  logger: {
    error(code, metadata) {
      console.log({ type: 'inside error logger', code, metadata })
    },
    warn(code) {
      console.log({ type: 'inside warn logger', code })
    },
    debug(code, metadata) {
      console.log({ type: 'inside debug logger', code, metadata })
    },
  },
  debug: true,
  pages: {
    signIn: '/auth/signIn',
    signOut: '/auth/signOut',
    error: '/error/error',
  },
})
