import {getToken} from 'next-auth/jwt';
import Twitter from "twitter-lite";


export default async (req, res) => {
    const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET
    });

    try {
        const twitterClient = new Twitter({
            consumer_key: process.env.TWITTER_ID,
            consumer_secret: process.env.TWITTER_SECRET,
            access_token_key: token.credentials.authToken, // from your User (oauth_token)
            access_token_secret: token.credentials.authSecret // from your User (oauth_token_secret)
        });
        //
        const userData = await twitterClient.get("users/show", {
            id: token.userProfile.userID,
            screen_name: token.userProfile.twitterHandle
        });

        const data = {
            twitterHandle: userData.screen_name,
            followersCount: userData.followers_count,
            followingCount: userData.friends_count,
            description: userData.description,
            location: userData.location,
        };

        return res.status(200).json({
            status: 'Ok',
            data
        });
    } catch (error) {
        // return error;
        return res.status(500).send({ error });
    }
}
