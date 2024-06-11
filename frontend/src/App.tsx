import React, { useState } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { useBooks, Book } from './hooks/useBooks';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    marginTop: '150px', 
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const { books, loading, error } = useBooks();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingList, setReadingList] = useState<Book[]>([]);

  const handleAddBook = (book: Book) => {
    setReadingList([...readingList, book]);
  };

  const handleRemoveBook = (title: string) => {
    setReadingList(readingList.filter((book) => book.title !== title));
  };

  const filteredBooks = searchQuery
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading books</p>;

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
      </Typography>
      <SearchBar setSearchQuery={setSearchQuery} />
      <div className={classes.contentContainer}>
        <BookList books={filteredBooks} onAddBook={handleAddBook} />
        <ReadingList books={readingList} onRemoveBook={handleRemoveBook} />
      </div>
    </Container>
  );
};

export default App;


