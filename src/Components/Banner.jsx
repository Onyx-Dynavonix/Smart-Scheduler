import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

// Import video and image files
import professionalMeetingVideo from '../assets/Video/1.mp4';
import anotherVideo from '../assets/Video/2.mp4'; 
import additionalVideo1 from '../assets/Video/3.mp4';
import additionalVideo2 from '../assets/Video/4.mp4'; 
import banners from '../assets/Video/img.jpg'; // Image as first item

const BannerContainer = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 70vh; /* Full screen height */
`;

const VideoWrapper = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
  
  video {
    width: 100%;
    height: 100%; /* Full height for each video */
    object-fit: cover;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1;
  font-size: 20px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const PrevButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;

function Banner() {
  // Array of video sources, including an image as the first element
  const videoLinks = [
    banners,  // Image as first item
    professionalMeetingVideo, // Video 1
    anotherVideo,             // Video 2
    additionalVideo1,         // Video 3
    additionalVideo2          // Video 4
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // State to track hover status

  const videoRefs = useRef(videoLinks.map(() => React.createRef())); // Create a ref for each video or image

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videoLinks.length;
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + videoLinks.length) % videoLinks.length;
    setCurrentIndex(prevIndex);
  };

  useEffect(() => {
    const currentMedia = videoRefs.current[currentIndex].current;
    
    // Play full video when hovered
    if (currentMedia && currentMedia.tagName === 'VIDEO') {
      if (isHovered) {
        currentMedia.play();
      } else {
        currentMedia.pause();
        currentMedia.currentTime = 0; // Reset video when not hovered
      }

      currentMedia.onended = handleNext; // Automatically play next video when the current one ends
    }

    // Pause all other videos
    videoRefs.current.forEach((ref, index) => {
      if (index !== currentIndex && ref.current && ref.current.tagName === 'VIDEO') {
        ref.current.pause();
      }
    });

    // Slide the video every 5 seconds if it's not hovered
    const autoSlideInterval = setInterval(() => {
      if (!isHovered) {
        handleNext(); // Move to the next slide after 5 seconds
      }
    }, 5000); // 5 seconds interval for auto-slide
    
    return () => clearInterval(autoSlideInterval); // Clear interval when component unmounts or index changes
  }, [currentIndex, isHovered]);

  return (
    <BannerContainer>
      <PrevButton onClick={handlePrev}>◀</PrevButton>
      <NextButton onClick={handleNext}>▶</NextButton>

      <div
        style={{
          display: 'flex',
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {videoLinks.map((videoLink, index) => (
          <VideoWrapper key={index}>
            {index === 0 ? (
              <img
                src={videoLink} // If it's the first item, render as an image
                alt="Banner"
              />
            ) : (
              <video
                ref={videoRefs.current[index]} // Assign the correct ref for each video
                src={videoLink} // Use the corresponding video link
                muted
                controls={false} // Optional: Remove controls for automatic playback
                onMouseEnter={() => setIsHovered(true)} // Set hover state to true when mouse enters
                onMouseLeave={() => setIsHovered(false)} // Set hover state to false when mouse leaves
              />
            )}
          </VideoWrapper>
        ))}
      </div>
    </BannerContainer>
  );
}

export default Banner;
