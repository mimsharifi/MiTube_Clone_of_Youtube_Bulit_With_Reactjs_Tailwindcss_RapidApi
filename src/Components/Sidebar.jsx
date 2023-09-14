
import { categories } from "../assets/constants"

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <div className="flex flex-row sm:flex-col mx-2 sm-mx-4 sm:overflow-y-auto">
      {categories.map(item =>(
        <button key={item.name} className={`group text-white flex items-center py-1 px-2 lg:px-4 my-1 hover:bg-red-600 rounded-full ${item.name === selectedCategory && `bg-red-600 text-white`}` }
        onClick={() => setSelectedCategory(item.name)} >
          <span className={`mr-2 sm:mr-4  group-hover:text-white ${item.name === selectedCategory ? `text-white` : `text-red-600`}`}> {item.icon} </span>
          <span className="opacity-80 group-hover:opacity-100"> {item.name} </span>
        </button>
      ))}
    </div>
  )
}

export default Sidebar