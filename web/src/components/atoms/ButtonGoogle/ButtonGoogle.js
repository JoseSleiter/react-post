import React from "react";
import { GoogleLogin } from "react-google-login";

const ButtonGoogle = () => {
  const responseSuccessGoogle = (response) => {
    console.log("!visible", response);
    const { tokenId } = response;
    console.log(tokenId);
    // fetch(api.API + "/api/v1/auth/google", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ tokenId: tokenId }),
    // })
    //   .then((response) => response.json())
    //   .then(
    //     (res) => {
    //       // setIsLoaded(true);
    //       // setItemWheater(result);
    //       console.log(res);
    //     },
    //     (err) => {
    //       // setIsLoaded(true);
    //       // setError(error);
    //       console.log("error", err);
    //     }
    //   );
  };

  const responseErrGoogle = (response) => {
    console.log("!errGoogle", response);
  };

  return (
    <>
      <GoogleLogin
        clientId="567500236217-h1kmpfiiutkqvmbkbnh3jvn132oud5kh.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseSuccessGoogle}
        onFailure={responseErrGoogle}
        cookiePolicy={"single_host_origin"}
        icon={true}
      />
    </>
  );
};

export default ButtonGoogle;
