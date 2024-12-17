import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { IoArrowUpCircle } from 'react-icons/io5';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Left Section: Logo and Company Name */}
        <LeftSection>
          <Logo src={logo} alt="Company Logo" />
          <CompanyName>Smart Scheduler</CompanyName>
        </LeftSection>

        {/* Right Section: Contact Information */}
        <RightSection>
          <ContactInfo>
            <ContactItem>
              <FaUser />
              <span><strong>Founder:</strong> Md Jasim Ansari</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span><strong>Email:</strong> contact@smartscheduler.com</span>
            </ContactItem>
            <ContactItem>
              <FaPhoneAlt />
              <span><strong>Phone:</strong> +9193XXXXXXX</span>
            </ContactItem>
          </ContactInfo>

        
        </RightSection>
      </FooterContent>

      {/* Back to Top Button and Footer Text */}
        {/* Social Media Links */}
        <SocialLinks>
            <SocialLink href="#" aria-label="Facebook"><FaFacebook /></SocialLink>
            <SocialLink href="#" aria-label="Twitter"><FaTwitter /></SocialLink>
            <SocialLink href="#" aria-label="LinkedIn"><FaLinkedin /></SocialLink>
            <SocialLink href="#" aria-label="Instagram"><FaInstagram /></SocialLink>
          </SocialLinks>
          
      <BackToTopButton href="#top" aria-label="Back to Top"><IoArrowUpCircle /></BackToTopButton>
      <FooterText>© 2024 Smart Scheduler. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  margin-top: 30px;
  background-color: #1F2A38;
  padding: 2rem 0;
  text-align: center;
  width: 100%;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #2A3D56; /* Darker shade on hover */
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1.5rem;
`;

// Left section styling (Logo and Company Name)
const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Logo = styled.img`
  width: 100px;
  height: 90px;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.h1`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.primary || '#3498db'};
  font-weight: 600;
  margin: 0;
`;

// Right section styling (Contact Information)
const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text || '#E0E0E0'};
  svg {
    color: ${({ theme }) => theme.colors.icon || '#3498db'};
    font-size: 1.2rem;
  }
  span {
    color: ${({ theme }) => theme.colors.primary || '#3498db'};
  }
`;

// Social media links
const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.primary || '#3498db'};
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover || '#2980b9'};
  }
`;

// Back to top button
const BackToTopButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.primary || '#3498db'};
  font-size: 2rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover || '#2980b9'};
    transform: translateY(-5px);
  }
`;

// Footer text
const FooterText = styled.p`
  margin-top: 20px;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.primary || '#3498db'};
`;

export default Footer;
