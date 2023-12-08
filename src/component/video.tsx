import { useSelector } from "react-redux";
import { RootState } from "../readuxStore/store";
import VideoUrlResolver from "../api/videoUrl";


const video : React.FC = () => {
  const currentState = useSelector((state: RootState) => state.climate.current);
  const videoUrl :any  = VideoUrlResolver({ condition: currentState?.condition.text });

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