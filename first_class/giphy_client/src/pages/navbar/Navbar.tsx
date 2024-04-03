import { Link } from 'react-router-dom';

const Navbar = () => (
    <div id="nav-container" className='relative w-11/12 m-auto'>
      <nav id='navbar' className='absolute top-0 inset-x-0 h-100'>
        <ul id='nav-list' className="shadow-[5px_5px_rgba(239,_239,_187,_0.4),_10px_10px_rgba(239,_239,_187,_0.3),_15px_15px_rgba(239,_239,_187,_0.2),_20px_20px_rgba(239,_239,_187,_0.1),_15px_15px_rgba(239,_239,_187,_0.05)] flex justify-evenly items-center w-2/3 m-auto h-full bg-gray-200 rounded-3xl mt-2">
          <li className="text-primary p-4 list-none hover:text-white-100 hover:cursor-pointer rounded-xl m-2">
            <Link to={"/"}><span className="no-underline p-4">Home</span></Link>
          </li>
          <li className="text-primary p-4 list-none hover:text-white-100 hover:cursor-pointer rounded-xl m-2">
            <Link to={"/gifs"}><span className="no-underline p-4">Gifs</span></Link>
          </li>
          <li className="text-primary p-4 list-none hover:text-white-100 hover:cursor-pointer rounded-xl m-2">
            <Link to={"/stickers"}><span className="no-underline p-4">Stickers</span></Link>
          </li>
          <li className="text-primary p-4 list-none hover:text-white-100 hover:cursor-pointer rounded-xl m-2" id="themeButton">
            <Link to={"/create"}><span className="no-underline p-4">Create</span></Link>
          </li>
        </ul>
      </nav>
    </div>
  )


export default Navbar