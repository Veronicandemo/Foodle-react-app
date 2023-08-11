import PropTypes from 'prop-types';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

const BestItem = ({ img, name }) => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-5 text-xl">
      <img src={img} alt="best item" width={'350rem'} height={'350rem'} />
      <p>{name}</p>
      <button className="text-DarkRed flex items-center justify-center gap-2 font-medium">
        Order Now
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};
BestItem.propTypes = {
  img: PropTypes.node.isRequired,
  name: PropTypes.string,
};
export default BestItem;
