import React from "react";
import AdminListPost from "../../organisms/AdminListPost/AdminListPost";

const Perfil = (props) => {
  const posts = [
    {
      name: "tesd",
      description: "teste",
      img: {
        src:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c48.90.256.256a/p320x320/12002278_10205117020948909_3926427252827415249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=NKqh8xGz5RgAX-90JL9&_nc_ht=scontent-mia3-2.xx&tp=27&oh=ff77f73454049b0d326b985923817530&oe=605A9973",
        title: "me",
        loading: true,
      },
    },
    {
      name: "tesd",
      description: "teste",
      img: {
        src:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c48.90.256.256a/p320x320/12002278_10205117020948909_3926427252827415249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=NKqh8xGz5RgAX-90JL9&_nc_ht=scontent-mia3-2.xx&tp=27&oh=ff77f73454049b0d326b985923817530&oe=605A9973",
        title: "me",
        loading: true,
      },
    },
    {
      name: "tesd",
      description: "teste",
      img: {
        src:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c48.90.256.256a/p320x320/12002278_10205117020948909_3926427252827415249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=NKqh8xGz5RgAX-90JL9&_nc_ht=scontent-mia3-2.xx&tp=27&oh=ff77f73454049b0d326b985923817530&oe=605A9973",
        title: "me",
        loading: true,
      },
    },
    {
      name: "tesd",
      description: "teste",
      img: {
        src:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c48.90.256.256a/p320x320/12002278_10205117020948909_3926427252827415249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=NKqh8xGz5RgAX-90JL9&_nc_ht=scontent-mia3-2.xx&tp=27&oh=ff77f73454049b0d326b985923817530&oe=605A9973",
        title: "me",
        loading: true,
      },
    },
    {
      name: "tesd",
      description: "loren",
      img: {
        src:
          "https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c48.90.256.256a/p320x320/12002278_10205117020948909_3926427252827415249_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=NKqh8xGz5RgAX-90JL9&_nc_ht=scontent-mia3-2.xx&tp=27&oh=ff77f73454049b0d326b985923817530&oe=605A9973",
        title: "me",
        loading: true,
      },
    },
  ];

  return (
    <div className="container">
      <div className="inner">
        <AdminListPost posts={posts}></AdminListPost>
      </div>
    </div>
  );
};

export default Perfil;
