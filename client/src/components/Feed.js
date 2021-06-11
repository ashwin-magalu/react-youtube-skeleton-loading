import React, { useEffect, useState } from "react";
import "./Feed.css";
import axios from "axios";
import Post from "./Post";
import Skeleton from "./Skeleton";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("/api/videos/1");
        setVideos(res.data);
      } catch (err) {
        console.log(err.message);
      }
      setIsLoading(false);
    };
    getVideos();
  }, []);

  return (
    <div className="feed">
      {isLoading ? (
        <Skeleton type="feed" />
      ) : (
        videos.map((video) => <Post key={video.id} video={video} />)
      )}
    </div>
  );
};

export default Feed;
