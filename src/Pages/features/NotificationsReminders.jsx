import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify'; // Correct import
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

const NotificationsReminders = () => {
  const [isReminderSet, setIsReminderSet] = useState(false);

  const handleSetReminder = () => {
    setIsReminderSet(true);
    toast.success('Reminder set successfully! You will be notified before the meeting.');
  };

  return (
    <>
      <Container>
        <Heading>Notifications & Reminders</Heading>
        <Paragraph>
          Get timely notifications and reminders for all your meetings. With Smart Scheduler, you never miss an important meeting again!
        </Paragraph>
        <Paragraph>Key Features:</Paragraph>
        <FeatureList>
          <FeatureItem>Automatic email and push notifications</FeatureItem>
          <FeatureItem>Customizable reminders for different timeframes</FeatureItem>
        </FeatureList>

        <Button onClick={handleSetReminder} disabled={isReminderSet}>
          {isReminderSet ? 'Reminder Set' : 'Set Reminder'}
        </Button>
        {isReminderSet && <Paragraph>Your reminder is active and notifications will be sent.</Paragraph>}
      </Container>

      {/* Toast Notification Container */}
      <ToastContainer /> {/* Corrected the component name */}
    </>
  );
};

export default NotificationsReminders;
