import { 
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} 
from 'graphql';
import _ from 'lodash';

const books = [
  { name: 'Name book 1', genre: 'Fantasy', id: '1'},
  { name: 'Name book 2', genre: 'Fantasy', id: '2'},
  { name: 'Name book 3', genre: 'Sci-Fi', id: '3'},
];

const authors = [
  { name: 'Hieu Nguyen', age: '22', id: '1'},
  { name: 'Admin 1', age: '30', id: '2'},
  { name: 'Admin 1', age: '25', id: '3'},
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      }
    }
  }
});

export default new GraphQLSchema({
  query: RootQuery
});