import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components
import { toast, ToastContainer } from 'react-toastify'; // Ensure toast and ToastContainer are correctly imported
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

const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;

  &:focus {
    border-color: #2c3e50;
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

const TimeZoneSupport = () => {
  const [userTimeZone, setUserTimeZone] = useState('');
  const [meetingTime, setMeetingTime] = useState('');
  const [adjustedTime, setAdjustedTime] = useState('');

  const handleTimeZoneChange = (e) => {
    setUserTimeZone(e.target.value);
  };

  const handleMeetingTimeChange = (e) => {
    setMeetingTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userTimeZone || !meetingTime) {
      toast.error('Please select both time zone and meeting time.');
      return;
    }

    // Simulating a simple time zone adjustment by appending the user's time zone
    setAdjustedTime(`${meetingTime} (Adjusted for ${userTimeZone})`);
    toast.success('Meeting time adjusted successfully!');
  };

  return (
    <>
      <Container>
        <Heading>Time Zone Support</Heading>
        <Paragraph>
          Smart Scheduler automatically adjusts meeting times based on participants' time zones, ensuring everyone is on the same page.
        </Paragraph>
        <Paragraph>Key Features:</Paragraph>
        <FeatureList>
          <FeatureItem>Automatic time zone adjustments for all meeting participants</FeatureItem>
          <FeatureItem>Easy-to-read time zone conversions</FeatureItem>
        </FeatureList>

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Label htmlFor="timeZone">Select Your Time Zone:</Label>
            <Input
              type="text"
              id="timeZone"
              name="timeZone"
              placeholder="e.g., GMT+5:30, EST"
              value={userTimeZone}
              onChange={handleTimeZoneChange}
              required
            />

            <Label htmlFor="meetingTime">Select Meeting Time:</Label>
            <Input
              type="datetime-local"
              id="meetingTime"
              name="meetingTime"
              value={meetingTime}
              onChange={handleMeetingTimeChange}
              required
            />

            <Button type="submit">Adjust Meeting Time</Button>
          </form>

          {adjustedTime && (
            <Paragraph>Your meeting time has been adjusted: {adjustedTime}</Paragraph>
          )}
        </FormContainer>
      </Container>

      {/* Ensure ToastContainer is placed at the root of the component tree */}
      <ToastContainer />
    </>
  );
};

export default TimeZoneSupport;
