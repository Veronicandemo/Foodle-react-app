import Benefit from './Benefit';
import { RiHandbagLine } from 'react-icons/ri';

const HomePage = () => {
  const benefits = [
    {
      icon: './public/fastdel.png',
      title: 'Fast Delivery',
      text: 'The Food Will Be Delivered To Your Home Within 1-2 Hours Of Ordering',
    },
    {
      icon: './public/roundedrm.png',
      title: 'Fresh Food',
      text: 'Your Food Will Be Delivered 100% Fresh. We Do Not Deliver Stale Food ',
    },
    {
      icon: './public/freedeli.png',
      title: 'Free Delivery',
      text: 'Your Food Delivery Is Absolutly Free .No Cost Just Order And Enjoy .',
    },
  ];
  return (
    <>
      <section className="relative mr-8 mt-24">
        <div className=" flex">
          <div className="flex flex-col space-y-7">
            <h2 className="text-8xl font-bold leading-snug text-red">
              All Fast Food is Available At Foodle
            </h2>
            <div className="flex items-center  gap-4">
              <img
                src="./public/avatar-ali.png"
                width={'70px'}
                height={'70px'}
              />
              <p className="whitespace-pre text-[18px] font-medium text-lightGrey">
                We Are Just A Click Away When You <br /> Crave For Delicious
                Fast Food
              </p>
            </div>
            <div className="flex items-center gap-10">
              <button className="relative h-16 w-40 gap-60 rounded-full  bg-DarkRed font-semibold text-white">
                <span className="ml-14"> Buy Now</span>

                <span className="absolute left-[7%] top-[7%] flex h-14 w-14 items-center justify-center rounded-full bg-DarkOrange   text-darkGrey ">
                  <RiHandbagLine size={'34px'} />
                </span>
              </button>
              <button>play btn</button>
              <p className="text-xl font-semibold text-darkGrey">
                How to order
              </p>
            </div>
          </div>

          <div>
            <img src="./public/sandwich.png" className="" />
          </div>
        </div>

        <div className="absolute  right-12 top-[30rem] flex h-40  items-center justify-between gap-10 rounded-3xl bg-slate-50 p-8 shadow-lg shadow-slate-500/50">
          {benefits.map((benefit) => (
            <Benefit
              icon={benefit.icon}
              title={benefit.title}
              text={benefit.text}
              key={benefit.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
