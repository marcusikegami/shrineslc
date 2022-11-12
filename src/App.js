import './App.css';
import Header from './components/Header';
import shrinelogo from './assets/images/shrinelogo.jpg';

function App() {
  return (
    <main>
      <Header/>
      <div className='flex flex-col items-center justify-center h-auto md:mx-40 md:my-8 '>
        <img alt='shrine logo by Katya Pogodaeva 2022' src={shrinelogo}/>
        <p className='font-bold text-4xl text-gray-500'>SITE UNDER CONSTRUCTION</p>
      </div>
    </main>
  );
}

export default App;
