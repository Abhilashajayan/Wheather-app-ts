
interface VideoUrlResolverProps {
  condition: string | undefined;
}

const VideoUrlResolver: React.FC<VideoUrlResolverProps> = ({ condition }) => {
  switch (condition) {
    case "Mist":
      return "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448143/mist_m7bxfh.mp4";
    case "Partly cloudy":
      return "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4";
    case "Patchy rain possible":
    case "Light rain":
      return "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448236/raining_yzxcop.mp4";
    case "Sunny":
      return "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701448356/sunny_yhecfv.mp4";
    default:
      return "https://res.cloudinary.com/dyawq6e7r/video/upload/v1701447984/slu6zxtm2utbwfsyqi1i.mp4";
  }
};

export default VideoUrlResolver;
