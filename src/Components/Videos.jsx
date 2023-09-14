import VideoCard from "./VideoCard"

const Videos = ({videos, direction}) => {
  if(!videos?.length) return "IsLoading..."
  console.log(videos)
  return (
    <div className={`flex justify-center flex-wrap flex-${direction || `row`}`}>
      {videos.map( (items, index) => (
        <div key={index} >
          {items.id.videoId && <VideoCard data={items} />}
        </div>
      ))}
    </div>
  )
}

export default Videos