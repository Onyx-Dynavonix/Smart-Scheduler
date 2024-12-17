import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Link as ScrollLink } from 'react-scroll'; // Scroll Link for smooth scrolling
import { NavbarContainer, NavbarLogo, NavbarLinks, NavbarLink, MobileMenuButton, MobileMenu, LogoImage, LoginButton } from './StyleNavbar';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  

  // Function to navigate to the homepage
  const goToHomePage = () => {
    navigate('/'); // Navigate to the homepage
  };

  // Function to navigate to the login page
  const goToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <NavbarContainer>
      {/* Logo */}
      <NavbarLogo onClick={goToHomePage}> {/* On logo click, navigate to homepage */}
        <LogoImage src={logo} alt="Smart Scheduler Logo" />
      </NavbarLogo>

      {/* Navbar Links */}
      <NavbarLinks>
        <NavbarLink>
          <ScrollLink to="features" smooth={true} duration={500}>
            Features
          </ScrollLink>
        </NavbarLink>
        <NavbarLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            Testimonials
          </ScrollLink>
        </NavbarLink>
        <NavbarLink>
          <ScrollLink to="footer" smooth={true} duration={500}>
            Contact
          </ScrollLink>
        </NavbarLink>
      </NavbarLinks>

      {/* Login Button on the right side */}
      <LoginButton onClick={goToLogin}>Login</LoginButton>

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </MobileMenuButton>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu>
          <NavbarLink>
            <ScrollLink to="features" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
              Features
            </ScrollLink>
          </NavbarLink>
          <NavbarLink>
            <ScrollLink to="testimonials" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
              Testimonials
            </ScrollLink>
          </NavbarLink>
          <NavbarLink>
            <ScrollLink to="footer" smooth={true} duration={500} onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </ScrollLink>
          </NavbarLink>
          <NavbarLink >
            <ScrollLink onClick={() => { goToLogin(); setIsMobileMenuOpen(false); }}>
            Login
            </ScrollLink>
            </NavbarLink>
        </MobileMenu>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
