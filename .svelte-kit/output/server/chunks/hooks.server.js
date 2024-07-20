import { S as SvelteKitAuth, A as AUTH_GITHUB_ID, a as AUTH_GITHUB_SECRET, G as GOOGLE_ID, b as GOOGLE_SECRET, c as AUTH_TWITTER_ID, d as AUTH_TWITTER_SECRET, e as AUTH_SECRET } from "./index2.js";
import GitHub from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import twitter from "@auth/core/providers/twitter";
const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
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
  };
  return authOptions;
});
export {
  handle,
  signIn,
  signOut
};
