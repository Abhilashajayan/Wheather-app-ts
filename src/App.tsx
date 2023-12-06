import React from 'react';
import Video from './component/video';
import { Search } from './component/search';
import { Display } from './component/display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const App: React.FC = () => {
  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <Video />

      <h1 className='font-pacifico absolute top-0 left-0 z-10 text-4xl md:text-2xl lg:text-3xl xl:text-3xl font-extrabold tracking-tight px-4 py-2 h-min-[80px] h-[120px]'>
        <span className='text-yellow-500'>Wea</span>
        <span className='text-yellow-400'>ther</span>
        <span className='text-yellow-300'> App</span>
      </h1>

      <p className='font-pacifico absolute top-0 right-0 mt-4 mr-4 text-2xl md:text-xl lg:text-2xl xl:text-2xl text-white z-10'>
        <FontAwesomeIcon className='text-white mr-3 w-4' icon={faLocationDot} />
        Kannur
      </p>

      <div className='flex items-center justify-center h-full relative z-10'>
        <div className='text-white text-center'>
          <Display />
          <Search />
        </div>
      </div>
    </div>
  );
};

export default App;
