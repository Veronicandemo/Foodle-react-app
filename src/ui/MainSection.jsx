import BestItem from './BestItem';

const MainSection = () => {
  const bestCategories = [
    {
      img: './public/cheeseBurger.png',
      name: 'Chicken Burger',
    },
    {
      img: './public/slicePizza.png',
      name: 'Chicken Pizza',
    },
    {
      img: './public/fries.png',
      name: 'French Fries',
    },
  ];
  return (
    <div>
      <div className="flex gap-[20%] ">
        <h2 className="text-darkGrey text-6xl font-bold">
          Best <span className="text-DarkRed ">Delivered</span> Categories
        </h2>
        <p className="text-lightGrey text-[18px] ">
          Here Are Some OF Our Best Distributed <br /> Categories. If You Want
          You Can Order From Here
        </p>
      </div>
      <div className="flex items-center gap-[10%]">
        {bestCategories.map((item) => (
          <BestItem img={item.img} name={item.name} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
