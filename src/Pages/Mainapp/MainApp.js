import SideBar from '../../Component/Sidebar/SideBar';
import CenterBlock from '../../Component/Centerblock/CenterBlock';
import './mainapp.css';

const MainApp = () => {
  return (
    <div className='container'>
      <SideBar />
      <CenterBlock />
    </div>
  );
};

export default MainApp;
