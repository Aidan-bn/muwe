import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import doctor from './assets/dr.png';

function App() {
  return (
    <div className="App-header">
      <Nav />
      <div className='heading'>
         <Header />
        <img src={doctor} alt="doctor" className='doctor'/>
      </div>
      </div>
  );
}

export default App;
