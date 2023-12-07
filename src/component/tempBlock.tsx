import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTint, faCloudRain, faWind } from '@fortawesome/free-solid-svg-icons';

type WheaData = {
    humidity: any,
    feelsLike : string | number,
    windSpeed : number | string
}



const TempBlock = ({humidity , feelsLike ,windSpeed}: WheaData) => {
  return (
    <div className='max-w-3xl mx-auto mt-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            <div className='border border-blue-200 p-6 rounded-lg shadow-md'>
                  <p className='text-2xl font-bold text-blue-800'>
                       <FontAwesomeIcon className="text-yellow-200" icon={faTint} />
                 </p>
                  <p className='text-yellow-500'>{humidity}%</p>
                 <p className='text-gray-700'>Humidity</p>
             </div>

    <div className='border border-green-200 p-6 rounded-lg shadow-md'>
             <p className='text-2xl font-bold text-green-800'>
               <FontAwesomeIcon className="text-yellow-200" icon={faCloudRain} />
              </p>
                  <p className='text-yellow-500'>{feelsLike}&deg;</p>
                  <p className='text-gray-700'>Feels Like</p>
    </div>

        <div className='border border-yellow-200 p-6 rounded-lg shadow-md'>
             <p className='text-2xl font-bold text-yellow-800'>
                 <FontAwesomeIcon className="text-yellow-200" icon={faWind} />
             </p>
                  <p className='text-yellow-500'>{windSpeed}</p>
                  <p className='text-gray-700'>Wind</p>
        </div>
    </div>
</div>

  );
};

export default TempBlock;
