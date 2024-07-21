import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET, GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET, AUTH_TWITTER_SECRET, AUTH_TWITTER_ID} from "$env/static/private"
import { SvelteKitAuth } from "@auth/sveltekit"
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
  return authOptions
})