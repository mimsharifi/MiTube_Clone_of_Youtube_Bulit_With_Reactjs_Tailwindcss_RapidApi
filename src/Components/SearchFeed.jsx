import { useState, useEffect } from "react";
// Api
import { fetchApi } from "../Services/fetchApi";
// Components
import Videos from "./Videos";
import { useParams } from "react-router-dom";


const SearchFeed = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect( () =>{
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then( data => setVideos(data.items) )
  }, [searchTerm])

  return (
    <main className="flex flex-col justify-center p-2 md:p-4 h-full">
      <div className="text-xl font-semibold text-center">
        <span className="text-white"> Result Search: </span>
        <span className="text-red-600"> {searchTerm}</span>
      </div>
      <Videos videos={videos}/>
    </main>
  )
}

export default SearchFeed