import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <ul className="custom-theme"><li className="demo-li"><a href="../front-end/index.html" target="_blank">Front end</a></li><li className="btn-rtl">RTL</li><li className="btn-dark-setting">Dark</li></ul>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
