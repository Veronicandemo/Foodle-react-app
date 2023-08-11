import HomePage from './HomePage';
import MainSection from './MainSection';

import NavBar from './NavBar';

const AppLayout = () => {
  return (
    <main className="">
      <section className="bg-lighttestRed container mx-auto max-w-[100%] rounded-b-3xl pb-28 pl-16 ">
        <NavBar />
        <HomePage />
      </section>
      <section className="mt-52 pl-16">
        <MainSection />
      </section>
    </main>
  );
};

export default AppLayout;
