import Logo from '../Logo/Logo';
import { links } from '../Const/Const';
import SideLinks from '../SideLinks/SideLinks';
import './sidebar.css';
const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <div className='logo'>
          <Logo />
        </div>
        <p className='heading'>SCHOOL MANAGEMENT</p>
      </div>
      <div className='sidebar-bottom'>
        {links.map((elem, index) => {
          return (
            <div key={`${index}${elem.name}`}>
              <SideLinks path={elem.path} src={elem.src} text={elem.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
