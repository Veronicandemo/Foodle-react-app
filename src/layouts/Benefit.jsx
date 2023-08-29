import PropTypes from 'prop-types';
const Benefit = ({ icon, title, text }) => {
  return (
    <div className="flex h-3/4 gap-5">
      <div className="flex h-24 w-52 items-center justify-center rounded-full bg-DarkOrange">
        <img src={icon} alt="" width={'64px'} />
      </div>
      <div>
        <p className="text-xl font-bold text-darkGrey ">{title}</p>
        <p className="whitespace-pre-wrap text-lightGrey">{text}</p>
      </div>
    </div>
  );
};

Benefit.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};
export default Benefit;
