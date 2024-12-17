// src/App.js
import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './Styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import EffortlessScheduling from './Pages/features/EffortlessScheduling';
import NotificationsReminders from './Pages/features/NotificationsReminders';
import GoogleCalendarIntegration from './Pages/features/GoogleCalendarIntegration';
import ProductivityInsights from './Pages/features/ProductivityInsights';
import AIPoweredSuggestions from './Pages/features/AIPoweredSuggestions';
import CrossPlatformSupport from './Pages/features/CrossPlatformSupport';
import SmartSearchEvents from './Pages/features/SmartSearchEvents';
import TimeZoneSupport from './Pages/features/TimeZoneSupport';
import HomePage from './Pages/HomePage';
import LoginPage from './Components/Login';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router>
      <Navbar />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/effortless-scheduling" element={<EffortlessScheduling />} />
        <Route path="/notifications-reminders" element={<NotificationsReminders />} />
        <Route path="/time-zone-support" element={<TimeZoneSupport />} />
        <Route path="/google-calendar-integration" element={<GoogleCalendarIntegration />} />
        <Route path="/productivity-insights" element={<ProductivityInsights />} />
        <Route path="/ai-powered-suggestions" element={<AIPoweredSuggestions />} />
        <Route path="/cross-platform-support" element={<CrossPlatformSupport />} />
        <Route path="/smart-search-events" element={<SmartSearchEvents />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;


