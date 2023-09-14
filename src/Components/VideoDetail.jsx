import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ReactPlayer from "react-player";

import { fetchApi } from "../Services/fetchApi";
import { MdCheckCircle } from "react-icons/md";
import Videos from "./Videos";

const VideoDetail = () => {

  const {id} = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)

  
  useEffect( () => {
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
      .then( (data) => setVideoDetail(data.items[0]) )

      fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        .then( (data) => setVideos(data.items))
      
    }, [id] )
  return (
    <div className="flex md:flex-row flex-col md:items-start items-center">
      <div className="flex-1">
      <div className="sticky top-24 w-full px-3">
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} width={"100%"} height={"65vh"} controls />
          <p className="text-white mt-2"> {videoDetail?.snippet?.title} </p>
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
              <p className="text-zinc-400">
                {videoDetail?.snippet?.channelTitle}
                <MdCheckCircle className="inline mx-2"/>
              </p>
            </Link>
            <div className="flex">
            <span className="text-zinc-400 text-xs mx-2"> {parseInt(videoDetail?.statistics?.viewCount).toLocaleString()} Views </span>
            <span className="text-zinc-400 text-xs mx-2"> {parseInt(videoDetail?.statistics?.likeCount).toLocaleString()} Likes </span>
            </div>
          </div>
      </div>
      </div>

        <div className="mt-4">
          <Videos videos={videos} direction={"col"} />
        </div>
    </div>
  )
}

export default VideoDetail