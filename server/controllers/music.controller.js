const album = require("../models/music.model");
const jwt = require('jsonwebtoken');


module.exports = {

    //get all documents from the "albums" collection 
    //and return an array of "album" documents (js objects)

//get all documents from the "albums" collection and return an array of "album" documents (js objects)
 findAllAlbums: (req,res)=>{
    console.log("All the albums!");
    //use the model yto connect to the collection and find/return all documents
    album.find({}) //find all documents. don't filter anything out
    .populate("user_id", "username")
    .then((allAlbums) => {
        res.json(allAlbums);
    })
    .catch((err)=>{
        console.log("Get all albums failed");
        res.status(400).json(err);
    })
},

findAllAlbumsByUser: (req, res)=>{

    album.find({user_id: req.params.id})
    .then((allUserAlbums)=>{
        console.log(allUserAlbums);
        res.json(allUserAlbums);
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json(err);
    })
},

findOneAlbum: (req, res)=>{
    //id will come to us from the param/url/route call    /api/albums/:id
    album.findOne({_id: req.params.id})            
    .then((oneAlbum)=>res.json(oneAlbum))
    .catch((err)=>{
        console.log("Find one  album failed");
        res.status(400).json(err)  
    })
},

createNewAlbum: (req, res)=>{
    const album = new album(req.body);
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
    //new obj needed in order to add that new user id (additional info outside of model)
    //decoded user_id is from model payload set-up
    album.user_id = decodedJwt.payload.user_id;
    //the payload's key (from our user controller) need to match payload.username (key below)
    album.createdByUserName = decodedJwt.payload.username;

    console.log(decodedJwt.payload.user_id);
    console.log(decodedJwt.payload.username);
    console.log(album);

    album.create(album)
    .then((newAlbum)=>
        res.json(newAlbum))
    .catch((err)=> {
        console.log("Create albums failed");
        res.status(400).json(err)
    })
},

updateAlbum: (req, res) => {
    album.findOneAndUpdate(
        //id will come to us from the param/url/route call    /api/albums/:id
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedAlbum => res.json(updatedAlbum))
        .catch((err)=> {
            console.log("Update albums failed");
            res.status(400).json(err)
        })
},

deleteAlbum: (req, res)=>{
    //id will come to us from the param/url/route call    /api/albums/:id
    album.deleteOne({_id: req.params.id})
    .then((deletedAlbum)=>res.json(deletedAlbum))
    .catch((err)=> {
        console.log("Delete albums failed");
        res.status(400).json(err)
    })
}

}


//ALTERNATIVE WAY TO WRITE IN IN THE PLATFORM.
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THIS WAY IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!