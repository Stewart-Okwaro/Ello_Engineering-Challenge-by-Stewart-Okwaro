import { ApolloClient, InMemoryCache, gql, useQuery, ApolloError } from '@apollo/client';

// Define the Book type
export type Book = {
  author: string;
  coverPhotoURL: string;
  readingLevel: number;
  title: string;
};

// Define the GraphQL query
const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: 'http://localhost:4000/', 
  cache: new InMemoryCache(),
});

// Custom hook to fetch books
export const useBooks = (): { books: Book[]; loading: boolean; error?: ApolloError } => {
  const { data, loading, error } = useQuery(GET_BOOKS, { client });

  return {
    books: data ? data.books : [],
    loading,
    error,
  };
};
