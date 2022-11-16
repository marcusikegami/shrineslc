import Header from './components/Header';
import shrinelogo from './assets/images/shrinelogo.jpg';
import Contact from './components/Contact';
import Video from './components/Video';
import {AiFillYoutube, AiFillInstagram} from "react-icons/ai";

function App() {
  return (
    <main>
      <Header/>
        <div className="flex justify-center py-2 border-t border-b border-darkpurple mx-16 my-2">
          <a href="https://www.youtube.com/channel/UCCJCWKOR156k8oA1ewXuKHQ" target="__blank" className="text-base font-medium text-gray-500 hover:text-red-600">
            <AiFillYoutube className='h-6 sm:h-12 w-6 sm:w-12 mx-2' />
          </a>
          <a href="https://www.instagram.com/shrineslc/" target="__blank" className="text-base font-medium text-gray-500 hover:text-magenta">
            <AiFillInstagram className='h-6 sm:h-12 w-6 sm:w-12 mx-2' />
          </a>
        </div>
      <body className='sm:mx-4 flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center h-auto sm:mx-20 md:mx-40 md:my-8 border-lightpurple'>
          <img alt='shrine logo by Katya Pogodaeva 2022' src={shrinelogo}/>
        </div>
      <Contact />
      <Video />
      </body>
    </main>
  );
}

export default App;
