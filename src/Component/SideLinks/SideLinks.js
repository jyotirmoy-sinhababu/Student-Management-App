import { NavLink } from 'react-router-dom';

const SideLinks = ({ src, text, path, onClick }) => {
  return (
    <NavLink to={path} className='side-link'>
      <img className='image' src={src} alt='' />
      <p className='txt'>{text}</p>
    </NavLink>
  );
};
export default SideLinks;
