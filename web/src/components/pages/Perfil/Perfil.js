import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FormNewPost from "../../molecules/FormNewPost/FormNewPost";

import AdminListPost from "../../organisms/AdminListPost/AdminListPost";
import Spinner from "./../../atoms/Spinner/Spinner";

const Perfil = (props) => {
  const userReducer = useSelector((state) => state.userReducer);

  const API = "http://localhost:3001";

  const [statePost, setStatePost] = useState({});
  const setDataNewPost = (input) => {
    setStatePost({
      ...statePost,
      [input.name]: input.value,
    });
  };

  const [statePosts, setStatePosts] = useState({
    posts: [],
  });

  const [statePage, setStatePage] = useState({
    loading_text: "Loading...",
    loading: true,
    err: {},
  });

  useEffect(() => {
    _getPosts();
  }, []);

  const _getPosts = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(
        `${API}/api/v1/post/user/${userReducer.user.id}`,
        config
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error("message___Get");
      }
      setStatePosts({
        posts: data.data,
      });
      console.log(data);

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

  const _fetchDeletedasync = async (id) => {
    console.log(id);
    try {
      const config = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(`${API}/api/v1/post/${id}`, config);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("message___Get");
      }
      _getPosts();
    } catch (err) {
      setStatePage({
        err: err.message,
        loading: false,
        loading_text: "",
      });
    }
  };

  const _fetchCreatePost = async () => {
    try {
      setStatePost({
        ...statePost,
        ["id_user"]: userReducer.user.id,
      });
      console.log(statePost);
      const config = {
        method: "POST",
        body: JSON.stringify(statePost),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await fetch(`${API}/api/v1/post/`, config);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("message___Get");
      }
      _getPosts();
    } catch (err) {
      setStatePage({
        err: err.message,
        loading: false,
        loading_text: "",
      });
    }
  };

  if (!statePosts.posts?.length) return <Spinner text="loading..."></Spinner>;
  return (
    <div className="container">
      <div className="inner">
        <FormNewPost
          handleChange={setDataNewPost}
          fetchCreatePost={_fetchCreatePost}
        ></FormNewPost>
        <AdminListPost
          posts={statePosts.posts}
          fetchDeleted={_fetchDeletedasync}
        ></AdminListPost>
      </div>
    </div>
  );
};

export default Perfil;
