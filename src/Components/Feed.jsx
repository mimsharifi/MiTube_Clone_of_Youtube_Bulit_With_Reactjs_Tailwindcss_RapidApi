import { useEffect, useState } from "react"

// Components
import Sidebar from "./Sidebar"
import Videos from "./Videos"
// Api
import { fetchApi } from "../Services/fetchApi"
// Icons
import { FaHeart } from "react-icons/fa"
import {InfinitySpin} from "react-loader-spinner"

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect( () =>{
    fetchApi(`search?part=snippet,id&q=${selectedCategory}`)
    .then( data => setVideos(data.items))

  }, [selectedCategory] )

  return (
    <div className="flex sm:flex-row flex-col min-h-[90vh] sm:overflow-y-auto">
      <nav className="fixed top-16 sm:top-24 bg-black text-white sm:h-screen w-full sm:w-40 lg:w-52 px-2 sm:border-r border-[#3d3d3d] sm:overflow-y-auto sm:overflow-x-hidden overflow-x-auto">
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <p className="text-xs md:text-sm text-center mt-2 md:mt-4 hidden sm:flex">
          Created With <FaHeart className="text-red-500"/> by Mim ! </p>
      </nav> 
      { videos?.length ? (
      <main className="sm:ml-40 lg:ml-48 md:p-4 flex-1 h-full sm:mt-0 mt-1">
        <div className="text-xl font-semibold text-center mb-4">
          <span className="text-white"> {selectedCategory} </span>
          <span className="text-red-600">Videos</span>
        </div>
        <Videos videos={videos} />
      </main> ) : <div className="sm:ml-40 lg:ml-48 md:p-4 mt-64 w-full flex justify-center"><InfinitySpin color="red" /> </div> }
    </div>
  )
}

export default Feed