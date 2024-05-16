import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home></Home>}></Route>
          <Route index path="about" element={<About></About>}></Route>
          <Route index path="contact" element={<Contact></Contact>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
