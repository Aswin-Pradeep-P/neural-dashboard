import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', value, onChange }) => {
  return (
    <TextField
      variant="outlined"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};

export default SearchInput;