import React, { useState, useEffect } from 'react';
import HomePageBgVideo from '../../../assets/HomePageBgVideo.mp4';
import HomePageBgVideoForMobileView from '../../../assets/HomePageBgVideoForMobileView.mp4'; // Make sure this is a different file

const HomePage = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    // Check immediately on mount
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        key={isMobileView ? 'mobile' : 'desktop'} // Force re-render when source changes
      >
        <source src={isMobileView ? HomePageBgVideoForMobileView : HomePageBgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomePage;