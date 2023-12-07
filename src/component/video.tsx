import { useSelector } from "react-redux";
import { RootState } from "../readuxStore/store";

const video : React.FC = () => {
  const currentState = useSelector((state: RootState) => state.climate.current);
  const videoUrl =
  currentState?.condition.text == "Mist"
    ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448143/mist_m7bxfh.mp4"
    : currentState?.condition.text == "Partly cloudy "
    ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4"
    : currentState?.condition.text == "Patchy rain possible" || currentState?.condition.text == "Light rain"
    ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448236/raining_yzxcop.mp4"
    : currentState?.condition.text == "Sunny"
    ? "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448356/sunny_yhecfv.mp4"
    : "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4";


  return (
    <div className='absolute inset-0 w-full h-full'>
   
   <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        src={videoUrl}
      ></video>
    <div className='relative bg-blue-500 w-screen h-screen bg-opacity-50 p-4 z-10'>
    </div>
    
  </div>
  )
}

export default video