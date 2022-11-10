import './App.css';
import Header from './components/Header';
import shrinelogo from './assets/images/shrinelogo.jpg';

function App() {
  return (
    <main>
      <Header/>
      <div className='flex justify-center h-auto mx-40 my-8 '>
        <img alt='shrine logo by Katya Pogodaeva 2022' src={shrinelogo}/>
      </div>
    </main>
  );
}

export default App;
