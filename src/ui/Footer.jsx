import {
  TiSocialFacebookCircular,
  TiSocialTwitter,
  TiSocialPinterestCircular,
  TiSocialInstagram,
} from 'react-icons/ti';
import { Link } from 'react-router-dom';
// import { RiSendPlaneFill } from 'react-icons/ri';
const Footer = () => {
  // const footerInfo = [{
  //   title: 'Foodish',
  // }];
  return (
    <footer className="grid grid-cols-4 gap-16 bg-lighttestRed p-24 font-light  text-stone-400">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-extrabold text-DarkRed">Foodish</h2>
          <p>Continue foodish 2023 all rights reseved</p>
        </div>
        <div>
          <h2 className="mb-4 text-4xl font-extrabold text-DarkRed">
            Follow Us on
          </h2>
          {/* social media icons */}
          <ul className="flex gap-5">
            <li>
              <a href="#">
                <TiSocialFacebookCircular size={34} />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialPinterestCircular size={34} />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialTwitter size={34} />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialInstagram size={34} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mb-4 text-4xl font-extrabold text-DarkRed">Menu</h2>
        <ul className="text-xl leading-10 tracking-wider">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="offers">Offers</Link>
          </li>
          <li>
            <Link to="services">Service</Link>
          </li>
          <li>
            <Link to="about">About Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-4xl font-extrabold text-DarkRed">
          Infomation
        </h2>
        <ul className="text-xl leading-10 tracking-wider">
          <li>
            <Link to="menu">Menu</Link>
          </li>
          <li>
            <Link to="offers">Quality</Link>
          </li>
          <li>
            <Link to="menu">Make a choice</Link>
          </li>
          <li>
            <Link to="about">Salad with Vegetable</Link>
          </li>
          <li>
            <Link to="about">Fast Delivery</Link>
          </li>
          <li>
            <Link to="about">Subscribe</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-4 text-4xl font-extrabold text-DarkRed">Contact</h2>
        <ul className="text-xl leading-10 tracking-wider">
          <li>
            <Link to="/">+254 112 654 568</Link>
          </li>
          <li>
            <Link to="offers">Explapore </Link>
          </li>
          <li>
            <Link to="services">info@foodish.com</Link>
          </li>
          <li>
            <Link to="about">7254, Nairobi, Kenya</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
