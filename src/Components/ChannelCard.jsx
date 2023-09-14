import { MdCheckCircle } from "react-icons/md"


const ChannelCard = ({details}) => {

  console.log(details)

  return (
    <div className="h-[90vh] mb-4">
      <div className="flex flex-col items-center">
        <img src={details?.brandingSettings?.image?.bannerExternalUrl} alt={details?.brandingSettings?.channel?.title} className="w-full h-56 bg-repeat"/>
        <div className="flex flex-col items-center mt-4">
          <img src={details?.snippet?.thumbnails?.medium?.url} alt="" className="rounded-full w-36"/>
          <div className="flex flex-col items-center text-white my-2">
            <h4 className="font-semibold mb-2"> {details?.snippet?.title} <MdCheckCircle className="inline text-zinc-400"/> </h4>
            <span className=" text-xs font-semibold">
              {parseInt(details?.statistics?.viewCount).toLocaleString()} Subscribers </span>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default ChannelCard