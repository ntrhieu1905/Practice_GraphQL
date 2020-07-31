import mongoose, { Schema } from 'mongoose';

const bookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
});

const BookModel = mongoose.model('Book', bookSchema);

export default BookModel;