import MainApp from './Pages/Mainapp/MainApp';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainApp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
