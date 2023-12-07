import React from 'react';
import Video from './component/video';
import { Search } from './component/search';
import { Display } from './component/display';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import TempBlock from './component/tempBlock';
import { useSelector } from "react-redux";
import { RootState } from "./readuxStore/store";



const App: React.FC = () => {
  const currentState = useSelector((state: RootState) => state.climate.current);
  const currentLocation = useSelector((state : RootState) => state.climate.location)

  const todayclimate = currentState?.condition.text !== undefined ? currentState.condition.text : 'NILL';
  const temp = currentState?.temp_c !== undefined ? currentState.temp_c : "0";
  const Humidity = currentState?.humidity !== undefined ? currentState.humidity  : "0";
  const feelsLike = currentState?.feelslike_c !== undefined ? currentState.feelslike_c:"0";
  const windSpeed = currentState?.wind_kph !== undefined ? currentState.wind_kph + "km/h" : "0";

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
        {currentLocation?.name}
      </p>
      
      <div className='flex items-center justify-center h-full relative z-10'>
      
        <div className='text-white text-center'>
        
          <Display temps={temp} condition={todayclimate} />
          <br/>
          <Search />
          <br/>   
          <br/>
          <TempBlock  humidity={Humidity} feelsLike={feelsLike} windSpeed={windSpeed}  />
        </div>
      </div>
    </div>
  );
};

export default App;
