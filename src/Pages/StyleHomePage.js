// src/pages/HomePage/HomePage.styles.jsx
import styled, { keyframes } from 'styled-components';

// Keyframe animations for smooth visual transitions
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  0% { opacity: 0; transform: translateX(-50px); }
  100% { opacity: 1; transform: translateX(0); }
`;

// Base container for the page layout
export const Container = styled.div`
margin-top: -35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  min-height: 100vh;
  
`;

// Header with smooth fade animation
export const Header = styled.header`
  margin-bottom: 0.2rem;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out;
  
  p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    color:#2c3e50  ;
    opacity: 0.8;
  }
`;

// Welcome message with modern font styling
export const WelcomeMessage = styled.h1`
  color: #3498db;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 2xl;
  letter-spacing: 1px;
  line-height: 2.0;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  cursor: pointer;

  

  // Styling for the logo image inside WelcomeMessage
  img {
    width: 120px;  // Adjust the width as needed
    height: auto;
    margin-bottom: 1rem;  // Space between the logo and the text
    position: absolute;
    top: -40px;  // Moves the logo above the text (you can adjust based on your preference)
    left: 50%;
    transform: translateX(-50%);  // Centers the logo horizontally
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: translateX(-50%) scale(1.1);  // Slightly enlarge the logo on hover
    }
  }
`;

// Hero image with border-radius and smooth hover effect
export const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin: 0.5rem 0;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

// Section for intro content with gradient background and card style
export const IntroSection = styled.section`
margin-top: 20px;
  padding: 1rem;
  text-align: center;
  max-width: 1500px;
  background: linear-gradient(50deg, #f2f2f2, #e0e0e0);
  border-radius: 10px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);

`;

// Styled text content within intro section
export const IntroText = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 550;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  margin-top: 0.2rem;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

// Add styles for the Meeting Management section
export const MeetingManagementSection = styled.section`
  margin-top: 1rem;
  padding: 2rem;
  margin-bottom: 30px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  max-width: 1200px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  animation: ${fadeInUp} 2.5s ease-in-out;

`;

export const MeetingManagementHeading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  
  
  
`;

export const MeetingManagementList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
  margin-top: 1rem;
  text-align: left;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
 
  

  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  li::before {
    content: '✔️';
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

// Features section with grid layout and hover effect
export const FeaturesSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;  // Ensures there's space below the Features section
  width: 100%;
  max-width: 1200px;
  animation: ${slideIn} 1s ease-in-out;
    cursor: pointer;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Feature = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 2rem;
  border-radius: 10px;
  font-size: 1.1rem;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }
`;

// Testimonials Section with styled quotes
export const TestimonialsSection = styled.section`
  margin: 3rem 0;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeInUp} 1.2s ease-in-out;
`;

export const Testimonial = styled.blockquote`
  font-size: 1.15rem;
  font-style: italic;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  margin: 0;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
`;

// Call-to-Action button with hover effect
export const GetStartedButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    transform: translateY(-5px);
  }

  &:active {
    transform: translateY(0);
  }
`;
