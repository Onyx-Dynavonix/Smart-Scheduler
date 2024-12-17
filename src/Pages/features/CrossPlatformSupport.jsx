import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 3rem auto;
  background-color: #ffffff; /* Clean background */
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
`;

const Heading = styled.h1`
  font-size: 2.75rem;
  font-weight: 600;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 2rem;
  text-align: center;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 2.5rem;
  font-size: 1.125rem;
  color: #444;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectNeedContainer = styled.div`
  margin-top: 3rem;
  background-color: #f4f4f9;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
`;

const ProjectNeedHeading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const ProjectNeedParagraph = styled.p`
  font-size: 1.125rem;
  color: #555;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const CrossPlatformSupport = () => (
  <Container>
    <Heading>Cross-Platform Support</Heading>
    <Paragraph>
      Smart Scheduler is available on all major platforms, allowing you to schedule and manage meetings from anywhere, whether you're using a desktop, tablet, or smartphone.
    </Paragraph>
    <Paragraph>
      Key Features:
    </Paragraph>
    <FeatureList>
      <FeatureItem>Available on Web, iOS, and Android</FeatureItem>
      <FeatureItem>Sync across devices for real-time updates</FeatureItem>
      <FeatureItem>Consistent user experience across platforms</FeatureItem>
      <FeatureItem>Access your schedule from anywhere, anytime</FeatureItem>
    </FeatureList>
    
    {/* Project Need Section */}
    <ProjectNeedContainer>
      <ProjectNeedHeading>Why Cross-Platform Support is Essential</ProjectNeedHeading>
      <ProjectNeedParagraph>
        With the increasingly mobile workforce, having cross-platform support ensures that users can stay connected and productive, no matter which device they use. This versatility is crucial for team collaboration and meeting management, especially when teams are distributed across different locations and time zones.
      </ProjectNeedParagraph>
      <ProjectNeedParagraph>
        Our goal is to offer seamless integration across all devices, allowing users to manage meetings effortlessly across their web browser, mobile devices, and tablets, ensuring they stay in control wherever they are.
      </ProjectNeedParagraph>
    </ProjectNeedContainer>
  </Container>
);

export default CrossPlatformSupport;
