import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import doctor from './assets/dr.png';
import Contact from './components/Contact';
import Interact from './components/Interact';

function App() {
  return (
    <>
      <div className="App-header">
        <Nav />
        <div className='heading'>
          <Header />
          <img src={doctor} alt="doctor" className='doctor'/>
        </div>
      </div>
      <Contact />
      {/* <Interact /> */}
    </>
  );
}

export default App;
