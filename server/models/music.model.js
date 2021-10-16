const mongoose = require("mongoose");
const User = require("./user.model");

const CartoonSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "A cartoon name is required!"],
        minLength: [5, "A cartoon name must be at least five characters long!"],
    },

    image: {
        type: String,
        required: [true, "Because we love pictures, you must add one!"]
    },
    // enumeration will allow us to limit the answers to specific strings
    // test the enum w a previous assignment
    genre: {
        type: String,
        required: [true, "Cartoon genre required!!!"],
        enum: [
            "Anime",
            "Comedy",
            "Drama",
            "Action",
            "Children",
            "Mystery",
            "Horror",
            "Comic",
            "Parody"
        ]
    },
    era: {
        type: Number,
        required: [true, "A cartoon era is required!"],
        // enumeration will allow us to limit the answers to specific strings
        // test the enum w a previous assignment
        enum: [
            1920,
            1930,
            1940,
            1950,
            1960,
            1970,
            1980,
            1990,
            2000,
            2010,
            2020
        ]
    },
    //this is optional because no required 
    rating: {
        type: Number,
        min: [0, 'Needs to be more than 0!'],
        max: [10, 'No more than 10!']
    },
    suitableForKids:{
        type: Boolean
    },

    user_id:{
        //in ref to User collection... obj Id gives us everything in that user
        type: mongoose.Schema.Types.ObjectId,

        //needs to match what we called our collection, it is case sensitive.
        //ref is able to grab ANY collection in the db
        ref: "User"
    },

    createdByUserName:{
        type: String
    }

}, {timestamps:true})
    //timestamps automatically create "createdAt" and"updatedAt" date and time info for each document
    //everytime a doc is updated, it will change the "updatedAt"

//Model is a combination of the 1. collectionName and 2.Schema
//Name will be collection name that's held in the db
//schema is going to be the singular of what will show as plural in the db
    const Cartoon = mongoose.model("Cartoon", CartoonSchema);
//This returns a cartoon model with the collection name and that schema

module.exports = Cartoon;