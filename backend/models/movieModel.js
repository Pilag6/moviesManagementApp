import { Schema, model } from "mongoose";

// Create a schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true,
        trim: true,
        min: 1895,
        minLength: 4
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    cover: {
        type: String,
        trim: true,
        required: true,
    },
    genre: { 
        type: [String],
        required: true,
    }
},
{
    timestamps: true
});

// Create a model 
const MovieModel = model('moviesDB', movieSchema)

export default MovieModel
