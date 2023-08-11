import PropTypes from 'prop-types';
const Benefit = ({ icon, title, text }) => {
  return (
    <div className="flex h-3/4 gap-5">
      <div className="bg-DarkOrange flex h-24 w-52 items-center justify-center rounded-full">
        <img src={icon} alt="" width={'54px'} />
      </div>
      <div>
        <p className="text-darkGrey text-xl font-bold ">{title}</p>
        <p className="text-lightGrey whitespace-pre-wrap">{text}</p>
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
