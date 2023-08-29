import PropTypes from 'prop-types';

const SixMenuItems = ({ pizza }) => {
  const { id, name, unitPrice, imageUrl, ingridients, soldOut } = pizza;
  console.log(id, soldOut, ingridients);
  return (
    <div className=" relative my-10 h-[300px] w-[70%]  rounded-[20px] bg-lighttestRed p-4">
      <img
        src={imageUrl}
        alt="pizza Image"
        height={'200px'}
        width={'200px'}
        className="absolute bottom-40 left-24 rounded-full border-[15px] border-DarkRed"
      />
      <div className="mt-40 ">
        <h2 className="text-xl font-extrabold text-stone-700">{name}</h2>

        <div className="mt-8 flex items-center justify-center gap-16">
          <p className="text-2xl font-extrabold text-stone-950">
            ${unitPrice.toFixed(2)}
          </p>
          <button className=" w-[50%] rounded-[45px] bg-DarkRed p-3 text-white">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};
SixMenuItems.propTypes = {
  pizza: PropTypes.object,
};

export default SixMenuItems;
