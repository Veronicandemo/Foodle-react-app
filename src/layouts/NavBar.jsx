import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className=" flex">
      <ul
        role="list"
        className="flex list-none items-center justify-center gap-16 p-5 text-lg font-semibold"
      >
        <li className="mr-20 text-darkGrey">
          <Link to="/" className="text-4xl font-extrabold tracking-wide">
            Foodle
          </Link>
        </li>
        <li className=" hover:text-darkGrey">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className=" hover:text-darkGrey">
          <NavLink to="/offers">Offer</NavLink>
        </li>
        <li className=" hover:text-darkGrey">
          <NavLink to="/servuices">Service</NavLink>
        </li>
        <li className=" hover:text-darkGrey">
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li className=" hover:text-darkGrey">
          <NavLink to="/about">About us</NavLink>
        </li>
        <li className="ml-20 text-DarkRed ">
          <Link to="/login">Login</Link>
          {/* </button> */}
        </li>
        <li className="text-DarkRed">
          <Link to="/sign up">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
