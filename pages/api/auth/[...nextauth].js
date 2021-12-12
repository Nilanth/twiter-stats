import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        TwitterProvider({
            clientId: process.env.TWITTER_ID,
            clientSecret: process.env.TWITTER_SECRET
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({token, user, account, profile, isNewUser}) {
            if (profile) {
                token['userProfile'] = {
                    followersCount: profile.followers_count,
                    twitterHandle: profile.screen_name,
                    followingCount: profile.friends_count,
                    userID: profile.id
                };
            }
            if (account) {
                token['credentials'] = {
                    authToken: account.oauth_token,
                    authSecret: account.oauth_token_secret,
                }
            }
            return token
        },
        async session({session, token, user}) {
            // Send properties to the client, like an access_token from a provider.
            delete token.userProfile.userID;
            session.twitter = token.userProfile;
            return session;
        }
    },
    secret: process.env.NEXTAUTH_SECRET
})
