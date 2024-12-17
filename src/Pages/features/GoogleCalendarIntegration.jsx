import React, { useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify'; // Correct import for ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

// Styled components
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f4f4f9;
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

const SyncStatus = styled.p`
  color: ${(props) => (props.success ? 'green' : 'red')};
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin-top: 1.5rem;
`;

const GoogleCalendarIntegration = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSynced, setIsSynced] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAuthentication = () => {
    setLoading(true);
    // Simulate Google authentication process (you'll need actual OAuth logic here)
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
      toast.success('Authenticated with Google successfully!');
    }, 1500);
  };

  const handleSync = () => {
    if (!isAuthenticated) {
      toast.error('Please authenticate first.');
      return;
    }

    setLoading(true);
    // Simulate Google Calendar sync
    setTimeout(() => {
      setIsSynced(true);
      setLoading(false);
      toast.success('Google Calendar synced successfully!');
    }, 1500);
  };

  const handleCreateEvent = () => {
    if (!isAuthenticated) {
      toast.error('Please authenticate first.');
      return;
    }

    setLoading(true);
    // Simulate event creation
    setTimeout(() => {
      setLoading(false);
      toast.success('Event created in Google Calendar!');
    }, 1500);
  };

  return (
    <>
      <Container>
        <Heading>Google Calendar Integration</Heading>
        <Paragraph>
          Seamlessly integrate with Google Calendar to sync your meetings and schedules without any hassle.
        </Paragraph>
        <Paragraph>Key Features:</Paragraph>
        <FeatureList>
          <FeatureItem>Instant synchronization with your Google Calendar</FeatureItem>
          <FeatureItem>Auto-update events and reminders in your calendar</FeatureItem>
          <FeatureItem>Schedule meetings directly from the app</FeatureItem>
        </FeatureList>

        <Button onClick={handleAuthentication} disabled={loading}>
          {loading && !isAuthenticated ? 'Authenticating...' : 'Authenticate with Google'}
        </Button>

        <Button
          onClick={handleSync}
          disabled={loading || !isAuthenticated}
        >
          {loading && isAuthenticated ? 'Syncing...' : isSynced ? 'Calendar Synced' : 'Sync with Google Calendar'}
        </Button>

        <Button onClick={handleCreateEvent} disabled={loading || !isAuthenticated}>
          {loading ? 'Creating Event...' : 'Create Event in Google Calendar'}
        </Button>

        <SyncStatus success={isSynced}>
          {isSynced ? 'Your Google Calendar is successfully synced!' : 'Not synced with Google Calendar yet.'}
        </SyncStatus>
      </Container>

      {/* Correct Toast Notification Container */}
      <ToastContainer />
    </>
  );
};

export default GoogleCalendarIntegration;
