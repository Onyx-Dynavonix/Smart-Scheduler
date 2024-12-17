// src/pages/HomePage/HomePage.jsx
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import { 
  Container, 
  Header, 
  WelcomeMessage, 
  IntroSection, 
  IntroText, 
  HeroImage, 
  FeaturesSection, 
  Feature, 
  TestimonialsSection, 
  Testimonial, 
  GetStartedButton, 
  MeetingManagementSection, 
  MeetingManagementHeading, 
  MeetingManagementList,
} from './StyleHomePage';
import professional_meeting from '../assets/Profesional_meeting.png';
import Banner from '../Components/Banner';
import logo2 from '../assets/logo2.png'
import Footer from '../Components/Footer/Footer';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigation = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <Container>
      {/* Header Section */}
      <Header>
        <WelcomeMessage>
        All In One 
          {/* <img src={logo2} alt="" /> */}
         
          <Banner/>
        </WelcomeMessage>
        <p>
        mart Scheduler is the all-in-one solution that revolutionizes the way meetings are scheduled. With its intuitive interface and intelligent features, it empowers professionals to optimize their time and collaborate effortlessly across teams and time zones. No more back-and-forth emails or confusing scheduling conflicts—Smart Scheduler takes the hassle out of planning meetings, allowing you to focus on what truly matters. Whether you're working remotely or in the office, our platform ensures seamless synchronization across devices, helping you stay on track and productive. Elevate your productivity and experience the future of scheduling today with Smart Scheduler—where efficiency meets simplicity!
        </p>
      </Header>


      {/* Meeting Management Section */}
      <MeetingManagementSection>
        <MeetingManagementHeading>
          Efficient Meeting Management
        </MeetingManagementHeading>
        <MeetingManagementList>
          <li>Quickly schedule meetings with ease</li>
          <li>Automatically adjust for time zones</li>
          <li>Send notifications and reminders</li>
          <li>Allow participants to select their availability</li>
          <li>Integrate seamlessly with your existing calendar</li>
        </MeetingManagementList>
      </MeetingManagementSection>

      {/* Features Section */}
      <FeaturesSection>
        
          <Feature onClick={() => handleNavigation('/effortless-scheduling')}>📅 Effortless Scheduling</Feature>
          <Feature onClick={() => handleNavigation('/notifications-reminders')}>🔔 Notifications & Reminders</Feature>
          <Feature onClick={() => handleNavigation('/time-zone-support')}>🕒 Time Zone Support</Feature>
          <Feature onClick={() => handleNavigation('/google-calendar-integration')}>⚙️ Google Calendar Integration</Feature>
          <Feature onClick={() => handleNavigation('/productivity-insights')}>📈 Productivity Insights</Feature>
          <Feature onClick={() => handleNavigation('/ai-powered-suggestions')}>🧠 AI-Powered Suggestions</Feature>
          <Feature onClick={() => handleNavigation('/cross-platform-support')}>🌍 Cross-Platform Support</Feature>
          <Feature onClick={() => handleNavigation('/smart-search-events')}>🔍 Smart Search for Events</Feature>
       
      </FeaturesSection>

      {/* Hero Image Section */}
      <HeroImage src={professional_meeting} alt="Professional meeting" />

      {/* Introduction Section */}
      <IntroSection>
        <IntroText>
          Smart Scheduler is your solution for managing meetings, optimizing time, and boosting productivity. 
          Experience a seamless way to organize schedules, track availability, and stay in sync with your team.
        </IntroText>
      </IntroSection>

      {/* Testimonials Section */}
      <TestimonialsSection>
        <Testimonial>"Smart Scheduler has transformed the way we manage our team meetings!" - Tech Company CEO</Testimonial>
        <Testimonial>"I save hours every week by letting Smart Scheduler handle my availability!" - Project Manager</Testimonial>
        <Testimonial>"An essential tool for any modern business." - Product Designer</Testimonial>
      </TestimonialsSection>

      {/* Call-to-Action */}
      <GetStartedButton>Get Started</GetStartedButton>
      <Footer/>
    </Container>
    
  );
};

export default HomePage;
