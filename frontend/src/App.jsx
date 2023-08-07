import logo from './logo.svg';
import './App.scss';
import { AppHeader } from './components/shared/header';
import { Footer } from './components/shared/footer';
import { Outlet } from 'react-router-dom';

export function App() {
  return <div className="App">
    <AppHeader appLogo={logo} appName="Staycation"/>
    <Outlet />
    <Footer/>
  </div>
}

//default App;
