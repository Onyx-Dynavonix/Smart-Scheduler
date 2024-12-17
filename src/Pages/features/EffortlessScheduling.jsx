import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify'; // Correct import for ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles

// Styled components
const Container = styled.div`
  padding: 3rem 2rem;
  max-width: 900px;
  margin: 3rem auto;
  background-color: #ffffff;
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

const FormContainer = styled.div`
  background-color: #f4f4f9;
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FormHeading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
  text-align: center;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  color: #333;

  &:focus {
    border-color: #2c3e50;
    outline: none;
  }
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

const EffortlessScheduling = () => {
  const [scheduleTime, setScheduleTime] = useState('');

  const handleChange = (e) => {
    setScheduleTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!scheduleTime) {
      toast.error('Please select a valid meeting time.');
      return;
    }

    toast.success(`Meeting successfully scheduled for: ${scheduleTime}`);
    setScheduleTime(''); // Clear the input field after submission
  };

  return (
    <>
      <Container>
        <Heading>Effortless Scheduling</Heading>
        <Paragraph>
          Effortlessly schedule meetings with minimal effort and time spent. Our smart scheduling system allows you to organize meetings quickly while ensuring that all participants are available at the same time.
        </Paragraph>
        <Paragraph>Key Features:</Paragraph>
        <FeatureList>
          <FeatureItem>Auto-suggest available time slots</FeatureItem>
          <FeatureItem>Seamlessly integrates with Google Calendar</FeatureItem>
          <FeatureItem>Supports multiple time zones</FeatureItem>
        </FeatureList>

        {/* Schedule Time Form */}
        <FormContainer>
          <FormHeading>Set Meeting Time</FormHeading>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="meetingTime">Select a time for your meeting:</Label>
            <Input
              type="datetime-local"
              id="meetingTime"
              name="meetingTime"
              value={scheduleTime}
              onChange={handleChange}
              required
            />
            <Button type="submit">Schedule Meeting</Button>
          </form>
        </FormContainer>
      </Container>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default EffortlessScheduling;
