const User = require("../models/user.model");
const { OAuth2Client } = require("google-auth-library");
const fetch = require("node-fetch");

class SocialService {
  async googleAuth(idToken) {
    const oAuth2 = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const googleClient = await oAuth2.verifyIdToken({
      idToken,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    return {
      id_provider: googleClient.payload.sub,
      name: googleClient.payload.name,
      profile_img: googleClient.payload.picture,
      email: googleClient.payload.email,
      email_verified: googleClient.payload.email_verified,
    };
  }

  async facebookAuth(idToken, userId) {
    // const tata = await fetch(
    //   `${process.env.FACEBOOK_CALLBACK_GRAPH}?client_id=${process.env.FACEBOOK_CLIENT_ID}&client_secret=${process.env.FACEBOOK_CLIENT_SECRET}&grant_type=client_credentials`
    // );
    const grapAuth2 = await fetch(
      `${process.env.FACEBOOK_CALLBACK_GRAPH}/${userId}?fields=id,name,picture,email&access_token=${idToken}`
    );
    const fbClient = await grapAuth2.json();
    return {
      id_provider: fbClient.id,
      name: fbClient.name,
      profile_img: fbClient.picture.data.url,
      email: fbClient.email,
      email_verified: fbClient.email_verified || true,
    };
  }
}

module.exports = new SocialService();
