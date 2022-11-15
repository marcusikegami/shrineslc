import Header from './components/Header';
import shrinelogo from './assets/images/shrinelogo.jpg';
import Contact from './components/Contact';
import Video from './components/Video';
import {AiFillYoutube, AiFillInstagram} from "react-icons/ai";

function App() {
  return (
    <main>
      <Header/>
        <div className="flex justify-center pt-2 pb-4">
          <a href="https://www.youtube.com/channel/UCCJCWKOR156k8oA1ewXuKHQ" target="__blank" className="text-base font-medium text-gray-500 hover:text-red-600">
            <AiFillYoutube className='h-12 w-12 mx-2' />
          </a>
          <a href="https://www.instagram.com/shrineslc/" target="__blank" className="text-base font-medium text-gray-500 hover:text-magenta">
            <AiFillInstagram className='h-12 w-12 mx-2' />
          </a>
        </div>
      <body className='sm:mx-4'>
        <div className='flex flex-col items-center justify-center h-auto sm:mx-20 md:mx-40 md:my-8 border-t border-b border-lightpurple'>
          <img alt='shrine logo by Katya Pogodaeva 2022' src={shrinelogo}/>
        </div>
      </body>
      <Contact />
      <Video />
    </main>
  );
}

export default App;
