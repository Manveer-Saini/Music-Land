const Cartoon = require("../models/cartoon.model");
const jwt = require('jsonwebtoken');


module.exports = {

    //get all documents from the "cartoons" collection 
    //and return an array of "cartoon" documents (js objects)

//get all documents from the "cartoons" collection and return an array of "cartoon" documents (js objects)
 findAllCartoons: (req,res)=>{
    console.log("All the cartoons!");
    //use the model yto connect to the collection and find/return all documents
    Cartoon.find({}) //find all documents. don't filter anything out
    .populate("user_id", "username")
    .then((allCartoons) => {
        res.json(allCartoons);
    })
    .catch((err)=>{
        console.log("Get all cartoons failed");
        res.status(400).json(err);
    })
},

findAllCartoonsByUser: (req, res)=>{

    Cartoon.find({user_id: req.params.id})
    .then((allUserCartoons)=>{
        console.log(allUserCartoons);
        res.json(allUserCartoons);
    })
    .catch((err)=>{
        console.log(err);
        res.status(400).json(err);
    })
},

findOneCartoon: (req, res)=>{
    //id will come to us from the param/url/route call    /api/cartoons/:id
    Cartoon.findOne({_id: req.params.id})            
    .then((oneCartoon)=>res.json(oneCartoon))
    .catch((err)=>{
        console.log("Find one  cartoon failed");
        res.status(400).json(err)  
    })
},

createNewCartoon: (req, res)=>{
    const cartoon = new Cartoon(req.body);
    const decodedJwt = jwt.decode(req.cookies.usertoken, {complete: true});
    //new obj needed in order to add that new user id (additional info outside of model)
    //decoded user_id is from model payload set-up
    cartoon.user_id = decodedJwt.payload.user_id;
    //the payload's key (from our user controller) need to match payload.username (key below)
    cartoon.createdByUserName = decodedJwt.payload.username;

    console.log(decodedJwt.payload.user_id);
    console.log(decodedJwt.payload.username);
    console.log(cartoon);

    Cartoon.create(cartoon)
    .then((newCartoon)=>
        res.json(newCartoon))
    .catch((err)=> {
        console.log("Create cartoons failed");
        res.status(400).json(err)
    })
},

updateCartoon: (req, res) => {
    Cartoon.findOneAndUpdate(
        //id will come to us from the param/url/route call    /api/cartoons/:id
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedCartoon => res.json(updatedCartoon))
        .catch((err)=> {
            console.log("Update cartoons failed");
            res.status(400).json(err)
        })
},

deleteCartoon: (req, res)=>{
    //id will come to us from the param/url/route call    /api/cartoons/:id
    Cartoon.deleteOne({_id: req.params.id})
    .then((deletedCartoon)=>res.json(deletedCartoon))
    .catch((err)=> {
        console.log("Delete cartoons failed");
        res.status(400).json(err)
    })
}

}


//ALTERNATIVE WAY TO WRITE IN IN THE PLATFORM.
//THEY HAVE MODULE.EXPORT.KEY_NAME FOR EVERY SINGLE METHOD
//I THINK THIS WAY IS EASIER, BUT THEY ARE ULTIMATELY THE SAME, SO DO WHAT FEELS GOOD!