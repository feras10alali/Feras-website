import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET, AUTH_TWITTER_SECRET, AUTH_TWITTER_ID, AUTH_FIREBASE_PROJECT_ID, AUTH_FIREBASE_CLIENT_EMAIL,AUTH_FIREBASE_PRIVATE_KEY} from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
import { FirestoreAdapter } from "@auth/firebase-adapter"
import { cert } from "firebase-admin/app"
import GitHub from "@auth/sveltekit/providers/github"
import Google from "@auth/sveltekit/providers/google"
import twitter from "@auth/sveltekit/providers/twitter"

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    
    providers: [
      GitHub({
        clientId: AUTH_GITHUB_ID,
        clientSecret: AUTH_GITHUB_SECRET
      }),
      Google({
        clientId: GOOGLE_ID,
        clientSecret: GOOGLE_SECRET
      }),
      twitter({
        clientId: AUTH_TWITTER_ID,
        clientSecret: AUTH_TWITTER_SECRET
      })
    ],
    secret: AUTH_SECRET,
    trustHost: true
  }
  return authOptions;
})