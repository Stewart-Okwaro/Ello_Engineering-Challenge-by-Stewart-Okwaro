

import React from 'react';
import { ListItem, ListItemText, Button, ListItemAvatar, Avatar } from '@material-ui/core';
import { Book } from '../hooks/useBooks';

interface BookItemProps {
  book: Book;
  onAddBook: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onAddBook }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar src={book.coverPhotoURL} alt={book.title} />
      </ListItemAvatar>
      <ListItemText primary={book.title} secondary={book.author} />
      <Button variant="contained" style={{ backgroundColor: '#5ACCCC', color: '#ffffff' }} onClick={() => onAddBook(book)}>
        Add to Reading List
      </Button>
    </ListItem>
  );
};

export default BookItem;



