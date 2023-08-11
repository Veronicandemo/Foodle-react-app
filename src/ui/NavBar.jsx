import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className=" flex">
      <ul
        role="list"
        className="flex list-none items-center justify-center gap-16 p-5 text-lg font-semibold"
      >
        <li className="text-darkGrey mr-20">
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
        <li className="ml-20">
          <Link>Login</Link>
        </li>
        <li>
          <Link>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
