import React from 'react';
import { List, makeStyles } from '@material-ui/core';
import { Book } from '../hooks/useBooks';
import BookItem from './BookItem';

interface BookListProps {
  books: Book[];
  onAddBook: (book: Book) => void;
}

const useStyles = makeStyles((theme) => ({
  bookListContainer: {
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    maxHeight: '400px',
    overflowY: 'auto',
    marginTop: theme.spacing(2),
    position: 'absolute',
    top: '70px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 999,
    width: '40%',
  },
}));

const BookList: React.FC<BookListProps> = ({ books, onAddBook }) => {
  const classes = useStyles();

  if (books.length === 0) return null;

  return (
    <div className={classes.bookListContainer}>
      <List>
        {books.map((book) => (
          <BookItem key={book.title} book={book} onAddBook={onAddBook} />
        ))}
      </List>
    </div>
  );
};

export default BookList;
