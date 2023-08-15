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
      <div className="mr-8 flex gap-[20%] ">
        <h2 className="text-6xl font-bold text-darkGrey">
          Best <span className="text-DarkRed ">Delivered</span> Categories
        </h2>
        <p className="text-[18px] text-lightGrey ">
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
