import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import { toast, ToastContainer } from 'react-toastify'; // Import toast notification
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// Styled components
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
`;

const FeatureItem = styled.li`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 0.8rem;
`;

const Button = styled.button`
  background-color: #2c3e50;
  color: #fff;
  padding: 0.75rem 2rem;
  font-size: 1.125rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: block;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #34495e;
  }
`;

const ProductivityInsights = () => {
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = () => {
    setReportGenerated(true);
    toast.success('Productivity report generated successfully!');
  };

  return (
    <>
      <Container>
        <Heading>Productivity Insights</Heading>
        <Paragraph>
          Track your meeting data and uncover productivity patterns with detailed insights on how your time is spent.
        </Paragraph>
        <Paragraph>Key Features:</Paragraph>
        <FeatureList>
          <FeatureItem>Track meeting durations and attendance</FeatureItem>
          <FeatureItem>Generate reports on meeting efficiency</FeatureItem>
        </FeatureList>

        <Button onClick={handleGenerateReport} disabled={reportGenerated}>
          {reportGenerated ? 'Report Generated' : 'Generate Report'}
        </Button>
        {reportGenerated && <Paragraph>Your productivity report is ready!</Paragraph>}
      </Container>

      {/* Toast Notification Container */}
      <ToastContainer />
    </>
  );
};

export default ProductivityInsights;
