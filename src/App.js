import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
                    <ul class="custom-theme"><li class="demo-li"><a href="../front-end/index.html" target="_blank">Front end</a></li><li class="btn-rtl">RTL</li><li class="btn-dark-setting">Dark</li></ul>

     <Outlet></Outlet>
    </div>
  );
}

export default App;
