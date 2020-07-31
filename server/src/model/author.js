import mongoose, { Schema } from 'mongoose';

const authorSchema = new Schema({
  name: String,
  age: Number
});

const AuthorModel = mongoose.model('Author', authorSchema);

export default AuthorModel;