
// icons
import { Link, useNavigate } from "react-router-dom"
import logo from "../assets/Images/logo.png"
import {FaSearch} from "react-icons/fa"
import { useState } from "react"

const Navbar = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const inputHandle = (e) => {
    setInput(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault();
    if(input){
      navigate(`/search/${input}`)
      setInput("")
    }
  }

  return (
    <div className="sticky z-50 top-0 flex justify-between items-center w-full h-1/5 p-3 md:p-6 bg-black">
      <Link to='/'>
        <img src={logo} className="w-9" alt="MiTube" />
      </Link>
      <form onSubmit={submitHandle}>
        <input onChange={inputHandle} value={input} type="search" className="relative py-2 px-3 w-52 sm:w-72 md:w-96 rounded-3xl outline-none"
        placeholder="Search..."/>
        <button type="submit"
          className="absolute right-5 md:right-10 bottom-6 md:bottom-9">
          <FaSearch className="md:text-xl bg-white text-red-500"/>
        </button>
      </form>
    </div>
  )
}

export default Navbar