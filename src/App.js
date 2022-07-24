import TopBar from '../src/components/TopBar/TopBar';
import Intro from './components/Intro/Intro';
import Protfolio from './components/protfolio/Protfolio';
import Works from './components/works/Works';
import Test from './components/Testimonials/Test';
import Contact from './components/contact/contact';
import './App.scss';
import { useState } from 'react';
import Menu from './components/Menu/MenuBar';

function App() {
const [menuOpen,setMenuOpen]=useState(false)

  return (
    <div className="App">
   <TopBar  menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
   <div className='sections'>
   <Intro />
   <Protfolio/>
   <Works />
   <Test/>
   <Contact/>
   </div>


    </div>
  );
}

export default App;
