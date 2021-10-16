const albumController = require("../controllers/album.controller");
const  { authenticate } = require("../config/jwt.config");

//we are exporting an arrow function with a parameter of app that contains five statements.
// We import in server.js like this: require("./routes/album.routes")(app);

module.exports = (app) => {
    app.get('/api/albums', albumController.findAllAlbums);
    //if data is being sent to my server to create something new, we use a POST request
    app.post('/api/albums', authenticate, albumController.createNewAlbum);
    //put this above all of the paths with variable routes (:id here)
    app.get('/api/albums/user/:id', albumController.findAllAlbumsByUser);
    //Make sure this goes second (with the params) because it will search this one by default.
    app.get('/api/albums/:id', albumController.findOneAlbum);
    app.put('/api/albums/:id', albumController.updateAlbum);
    app.delete('/api/albums/:id', albumController.deleteAlbum);
}
