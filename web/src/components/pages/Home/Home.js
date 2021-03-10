import React, { useState, useEffect } from "react";
import ListPosts from "../../organisms/ListPosts/ListPosts";

const Home = (props) => {
  const API = "http://localhost:3001";
  const [statePosts, setStatePosts] = useState({
    posts: [],
  });

  const [statePage, setStatePage] = useState({
    loading_text: "Loading...",
    loading: true,
    err: {},
  });

  useEffect(() => {
    _getNews();
  }, []);

  const _getNews = async () => {
    try {
      const response = await fetch(`${API}/api/v1/post`);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("message___Get");
      }
      console.log(data);
      setStatePosts({
        posts: data.data,
      });
      setStatePage({
        ...statePage,
        loading: false,
      });
    } catch (err) {
      // const { message, code } = JSON.parse(err.message);
      setStatePage({
        err: err.message,
        loading: false,
        loading_text: "",
      });
    }
  };

  return (
    <div className="container">
      <div className="inner">
        <ListPosts posts={statePosts.posts}></ListPosts>
      </div>
    </div>
  );
};

export default Home;
