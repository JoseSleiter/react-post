import React from "react";
import FacebookLogin from "react-facebook-login";

import "./ButtonFacebook.css";

const ButtonFacebook = () => {
  const responseFacebook = (response) => {
    console.log("!visibleF", response);
    const { accessToken, userID } = response;
    console.log(accessToken);
    // fetch(api.API + '/api/v1/auth/facebook', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ accessToken, userID }),
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
    //       console.log('error', err);
    //     }
    //   );
  };

  return (
    <>
      <FacebookLogin
        appId="573023899951213"
        autoLoad={false}
        callback={responseFacebook}
        cssClass="fb-btn-block"
        icon="fa-facebook"
      />
    </>
  );
};

export default ButtonFacebook;
