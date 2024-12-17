import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 3rem auto;
  background-color: #ffffff; /* Clean, professional background */
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

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const ImagePlaceholder = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`;

const AIPoweredSuggestions = () => (
  <Container>
    <Heading>AI-Powered Suggestions</Heading>
    <Paragraph>
      Let AI suggest the best times for your meetings based on participants' availability, time zones, and preferences. 
      With Smart Scheduler's AI, you can optimize your scheduling to save time and enhance collaboration.
    </Paragraph>
    <Paragraph>
      Key Features:
    </Paragraph>
    <FeatureList>
      <FeatureItem>AI-driven scheduling suggestions based on participants' availability and preferences</FeatureItem>
      <FeatureItem>Adaptive learning: AI learns your patterns and makes smarter recommendations</FeatureItem>
      <FeatureItem>Time zone adjustments for global teams, ensuring no one misses a meeting</FeatureItem>
      <FeatureItem>Intelligent conflict detection to avoid scheduling errors</FeatureItem>
      <FeatureItem>Seamless integration with calendar tools to synchronize schedules automatically</FeatureItem>
    </FeatureList>
    <ImageSection>
      <ImagePlaceholder src="path/to/your/image.jpg" alt="AI-powered scheduling" />
    </ImageSection>
  </Container>
);

export default AIPoweredSuggestions;
