import styled from 'styled-components';

// Main container for navbar
export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.1rem 3rem;
  background-color: #1F2A38;  /* Dark background */
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid #3992D1; /* Add a blue border at the bottom */
  transition: background-color 0.3s ease-in-out;
  /* Smooth background transition on scroll */
  
  &:hover {
    background-color: #2A3D56; /* Darker shade on hover */
  }
`;

// Logo
export const NavbarLogo = styled.div`
  color: #FFFFFF;
  font-size: 2rem;  /* Increased size for a more prominent logo */
  font-weight: bold;
  display: flex;
  align-items: center;
  letter-spacing: 1px;  /* Slight space between letters */
  cursor: pointer;
`;

// Logo Image
export const LogoImage = styled.img`
  height: 65px;
  width: auto;
  margin-right: 0.8rem; /* Space between logo and image */
  object-fit: contain; /* Ensures the image aspect ratio is preserved */
  max-width: 100%; /* Ensures the image doesn't overflow its container */
  display: block; /* Prevents any unwanted space below the image */
  transition: transform 0.3s ease; /* Smooth transition for hover effects */
  
  /* Optional: Add a hover effect for interactivity */
  &:hover {
    transform: scale(1.05); /* Slightly zoom in on hover */
  }
`;

// Navbar Links
export const NavbarLinks = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  gap: 3rem; /* Increased gap for more breathing space */

  @media (max-width: 768px) {
    display: none; /* Hide links on mobile */
  }
`;

// Individual Link Style
export const NavbarLink = styled.div`
  a {
    color: #50B5F1; /* Light blue color */
    text-decoration: none;
    font-size: 1.2rem; /* Slightly larger font */
    padding: 12px 0;
    font-weight: 600; /* Bold font weight for emphasis */
    letter-spacing: 0.5px;  /* Slight letter spacing */
    transition: color 0.3s ease, transform 0.2s ease;
    cursor: pointer;
  }

  a:hover {
    color: #fff; /* Change text color on hover */
    transform: scale(1.1); /* Slight zoom effect on hover */
  }
`;

// Mobile Menu Button
export const MobileMenuButton = styled.div`
  font-size: 2rem;  /* Larger size for better visibility */
  color: #FFFFFF;
  cursor: pointer;
  display: none;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(90deg); /* Rotate icon on hover */
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1F2A38; /* Dark background */
  position: absolute;
  top: 60px;
  left: 50%; /* Centers the menu horizontally */
  transform: translateX(-50%); /* Centers the menu exactly */
  width: 80%; /* Increased width for larger menu */
  padding: 1.5rem; /* Increased padding for more space inside */
  z-index: 10;
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Soft shadow for better visibility */
  margin: 10px 20px;

  @media (min-width: 769px) {
    display: none; /* Hide on desktop */
  }

  a {
    padding: 25px 0; /* Increased padding for more space */
    color: #F1F1F1; /* Light color for text */
    font-weight: 600; /* Make text bold */
    text-decoration: none;
    text-align: center;
    margin: 15px 0; /* Add space between each link */
    font-size: 1.5rem;  /* Larger font size */
    letter-spacing: 0.5px;
    transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
    border-radius: 4px; /* Slight rounded corners for the links */
  }

  a:hover {
    color: #fff; /* Change text color to white */
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  /* Add bottom space to the last link */
  a:last-child {
    margin-bottom: 20px;
  }
`;

export const LoginButton = styled.button`
  background-color: rgba(80, 181, 241, 0.5);
  color: white;
  font-size: 1.0rem;
  font-weight: 500;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    background-color: #3992D1; /* Darker shade on hover */
    transform: scale(1.05); /* Slight zoom effect */
  }

  /* Mobile menu adjustment */
  @media (max-width: 768px) {
    margin-top: 10px;  /* Add space for mobile menu */
  }
`;
