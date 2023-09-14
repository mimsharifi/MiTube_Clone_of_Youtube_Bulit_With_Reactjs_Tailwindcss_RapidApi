import { useEffect, useState } from "react"
import { MdCheckCircle } from "react-icons/md"
import { Link } from "react-router-dom"
import { fetchApi } from "../Services/fetchApi"

const VideoCard = ({data: { id:{ videoId }, snippet }}) => {
  
  return (
    <div className="w-56 mx-2 mb-3">
      <Link to={videoId && `/video/${videoId}`}>
        <img src={snippet?.thumbnails?.medium?.url} alt={snippet?.title} className="w-full"/>
      </Link>
      <div className="bg-zinc-800 h-28 flex flex-col p-2 w-full">
        <Link to={videoId && `/video/${videoId}`}>
          <span className=" text-white text-sm font-bold"> {snippet?.title?.slice(0, 45)} </span>
        </Link>
        <Link to={snippet.channelId && `/channel/${snippet?.channelId}`}>
          <span className=" text-zinc-400 text-xs font-medium"> {snippet?.channelTitle?.slice(0, 40)} <MdCheckCircle className="inline"/> </span>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard