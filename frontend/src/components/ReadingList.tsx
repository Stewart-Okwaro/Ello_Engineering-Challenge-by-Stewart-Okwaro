
import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';
import { Book } from '../hooks/useBooks';

interface ReadingListProps {
  books: Book[];
  onRemoveBook: (title: string) => void;
}

const ReadingList: React.FC<ReadingListProps> = ({ books, onRemoveBook }) => {
  const getCardWidth = () => {
    const numBooks = books.length;
    if (numBooks <= 2) {
      return '40vw';
    } else {
      return 'auto';
    }
  };

  return (
    <Container>
      
      <Grid container spacing={3}>
        {books.map((book, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} style={{ width: getCardWidth() }}>
            <Card>
              <CardMedia
                component="img"
                alt={book.title}
                height="140"
                image={book.coverPhotoURL}
                title={book.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {book.title}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                  {book.author}
                </Typography>
                <Button variant="contained" style={{ backgroundColor: '#F76CCC', color: '#ffffff' }} onClick={() => onRemoveBook(book.title)}>
                  Remove
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ReadingList;

