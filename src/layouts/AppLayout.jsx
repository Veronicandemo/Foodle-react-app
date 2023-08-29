import { Outlet, useNavigation } from 'react-router';
import HomePage from './HomePage';
import MainSection from './MainSection';

import NavBar from './NavBar';
import Loader from './Loader';

const AppLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="">
      {isLoading && <Loader />}
      <section className=" mx-auto max-w-[100%] rounded-b-3xl bg-lighttestRed pb-28 pl-16 ">
        <NavBar />
        <HomePage />
        <Outlet />
      </section>
      <section className="mt-52 pl-16">
        <MainSection />
      </section>
    </div>
  );
};

export default AppLayout;
