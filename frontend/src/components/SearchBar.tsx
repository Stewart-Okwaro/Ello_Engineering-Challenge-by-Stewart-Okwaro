import React from 'react';
import { TextField, InputAdornment, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    position: 'fixed',
    top: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    backgroundColor: '#fff',
    zIndex: 1000,
    padding: theme.spacing(1, 0),
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
   
  },
  searchBar: {
    left: '30%',
    width: '40%',
    margin: '0 auto',
  },
  logoImage: {
    display: 'block',
    margin: '0 auto',
    marginBottom: theme.spacing(0.5),
  },
}));

interface SearchBarProps {
  setSearchQuery: (searchQuery: string) => void;
  closeBookList?: () => void; // Make closeBookList optional
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchQuery }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchBarContainer}>
      <img
        src="https://books.ello.com/static/media/logoEllo.2b20bb072a0c339867f3cb02fe3515b6.svg"
        alt="Ello Logo"
        className={classes.logoImage}
      />
      <TextField
        className={classes.searchBar}
        label="Search Books"
        variant="outlined"
        fullWidth
        onChange={(e) => setSearchQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
        
    </div>
  );
};

export default SearchBar;


