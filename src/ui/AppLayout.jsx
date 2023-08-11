import HomePage from './HomePage';
import NavBar from './NavBar';

const AppLayout = () => {
  return (
    <div className="bg-lighttestRed mx-auto w-[100%] rounded-b-3xl pb-28">
      <NavBar />
      <main className="container ml-24">
        <HomePage />
      </main>
    </div>
  );
};

export default AppLayout;
