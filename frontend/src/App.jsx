import logo from './logo.svg';
import './App.css';
import { AppHeader } from './components/shared/header';
import { Outlet } from 'react-router-dom';

export function App() {
  return <div className="App">
    <AppHeader appLogo={logo} appName="DNBStays" />
    <Outlet />
  </div>
}

//default App;
