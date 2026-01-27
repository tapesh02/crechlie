'use client';

import PropTypes from 'prop-types';
import { Box, TextField, InputAdornment, Container } from '@mui/material';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: 4,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <TextField
          fullWidth
          placeholder="Search for creches..."
          value={searchTerm}
          onChange={handleChange}
          sx={{
            maxWidth: '500px',
            '& .MuiOutlinedInput-root': {
              backgroundColor: '#fff',
              borderRadius: '8px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FaSearch size={16} style={{ color: '#999' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {};

export default SearchBar;
