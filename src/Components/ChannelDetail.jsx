import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

import { fetchApi } from "../Services/fetchApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {

  const {id} = useParams();
  const [videos, setVideos] = useState(null);
  const [channelDetail , setChannelDetail] = useState();
  // if(!channelDetail?.length) return "Loading..."

  useEffect(() => {
    fetchApi(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data?.items[0]))

    fetchApi(`search?channelId=${id}&part=snippet&order=date`)
      .then(data => setVideos(data?.items))
  }, [id])
  
  console.log(channelDetail)

  return (
    <div>
      <ChannelCard details={channelDetail} />
      <Videos videos={videos} />
    </div>
  )
}

export default ChannelDetail