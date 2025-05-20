import dynamic from 'next/dynamic';
import { useEffect } from 'react';

// Dynamically import plyr-react to avoid SSR issues
const Plyr = dynamic(() => import('plyr-react'), { ssr: false });

const VideoPlayer = () => {
  const videoSrc = {
    type: 'video',
    sources: [
      {
        src: 'https://cdn.plyr.io/static/blank.mp4', // Replace this with your actual video URL
        type: 'video/mp4',
      },
    ],
  };

  useEffect(() => {
    import('plyr-react/plyr.css'); // Import Plyr CSS client-side only
  }, []);

  return (
    <div>
      <Plyr source={videoSrc} />
    </div>
  );
};

export default VideoPlayer;
