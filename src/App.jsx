import { createBrowserRouter } from 'react-router-dom';
import Home from './layouts/Home';
import Menu, { loader as menuLoader } from './components/menu/Menu';
import Services from './pages/Services';
import About from './pages/About';
import Offer from './pages/Offer';
import { RouterProvider } from 'react-router';
import LogIn from './components/user/LogIn';
import SignUp from './components/user/SignUp';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/menu',
    element: <Menu />,
    loader: menuLoader,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/offers',
    element: <Offer />,
  },
  {
    path: '/login',
    element: <LogIn />,
  },
  {
    path: '/sign up',
    element: <SignUp />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
