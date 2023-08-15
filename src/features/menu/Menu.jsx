import { useLoaderData } from 'react-router';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

const Menu = () => {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="container ml-10 grid grid-cols-3 gap-4 p-12">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
};
// create leader function
export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
export default Menu;
