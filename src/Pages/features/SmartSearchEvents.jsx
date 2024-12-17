import React, { useState } from 'react';
import styled from 'styled-components'; // Import styled-components

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

const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 1rem;
  font-size: 1rem;

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

const SmartSearchEvents = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const handleSearch = () => {
    // Example of handling search (this can be modified to work with your event data)
    if (searchQuery) {
      // In a real app, this would query an API or filter events from an array
      setSearchResults([
        `Event matching "${searchQuery}" 1`,
        `Event matching "${searchQuery}" 2`,
        `Event matching "${searchQuery}" 3`,
      ]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <Container>
      <Heading>Smart Search for Events</Heading>
      <Paragraph>
        Easily find and manage your meetings with Smart Scheduler’s advanced search functionality.
      </Paragraph>
      <Paragraph>Key Features:</Paragraph>
      <FeatureList>
        <FeatureItem>Intelligent search filters for fast results</FeatureItem>
        <FeatureItem>Search for events by keywords, dates, and participants</FeatureItem>
      </FeatureList>

      {/* Search input */}
      <Input
        type="text"
        placeholder="Search events by keyword"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={handleSearch}>Search</Button>

      {/* Display search results */}
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          <ul>
            {searchResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        </div>
      )}
    </Container>
  );
};

export default SmartSearchEvents;
