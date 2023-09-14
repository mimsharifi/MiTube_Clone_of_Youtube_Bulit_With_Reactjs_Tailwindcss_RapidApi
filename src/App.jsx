import { Route, Routes } from "react-router-dom"

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from "./Components"

function App() {

  return (
    <div className="bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  )
}
export default App