import React from "react";

const Form = (props) =>{

    const{submitHandler, buttonText, album, setAlbum, errors} = props;

    const inputHandler = (e) =>{
        let newStateObject = {...album};
        console.log(e.target.name, e.target.value);
        newStateObject[e.target.name] = e.target.value;
        setAlbum(newStateObject);
    }

    return(
        <div>
            <form onSubmit={submitHandler}>

                <label>Band Name: </label>
                <input onChange={inputHandler} name="bandName" value={album.bandName} type="text" />
                {
                    errors.bandName ?
                    <span style={{color:"red"}}>{errors.bandName.message}</span>
                    :null
                }
                <br />

                <label>Album Name: </label>
                <input onChange={inputHandler} name="albumName" value={album.albumName} type="text" />
                {
                    errors.albumName ?
                    <span style={{color:"red"}}>{errors.albumName.message}</span>
                    :null
                }
                <br />

                <label>Genre: </label>
                <input onChange={inputHandler} name="genre" value={album.genre}>
                    <option value="Rock">Rock</option>
                    <option value="Hip Hop/Rap">Hip Hop/Rap</option>
                    <option value="Pop">Pop</option>
                    <option value="Jazz">Jazz</option>
                    <option value="Country">Country</option>
                    <option value="Folk">Folk</option>
                    <option value="Blues">Blues</option>
                    <option value="Heavy Metal">Heavy Metal</option>
                    <option value="Classical">Classical</option>
                    <option value="Electronic">Electronic</option>
                    <option value="Reggae">Reggae</option>
                    <option value="Soul">Soul</option>
                    <option value="Disco">Disco</option>
                </input>
                {
                    errors.genre ?
                    <span style={{color:"red"}}>{errors.genre.message}</span>
                    :null
                }
                <br />

                <label>Era: </label>
                <input onChange={inputHandler} name="era" value={album.era}>
                    <option value="1920">1920</option>
                    <option value="1930">1930</option>
                    <option value="1940">1940</option>
                    <option value="1950">1950</option>
                    <option value="1960">1960</option>
                    <option value="1970">1970</option>
                    <option value="1980">1980</option>
                    <option value="1990">1990</option>
                    <option value="2000">2000</option>
                    <option value="2010">2010</option>
                    <option value="2020">2020</option>
                </input>
                {
                    errors.era ?
                    <span style={{color:"red"}}>{errors.era.message}</span>
                    :null
                }
                <br />

                <label>Rating: </label>
                <input onChange={inputHandler} name="rating" value={album.rating} type="number" />
                {
                    errors.rating ?
                    <span style={{color:"red"}}>{errors.rating.message}</span>
                    :null
                }
                <br />

                <label>User ID: </label>
                <input onChange={inputHandler} name="userid" value={album.userid} type="mongoose.Schema.Types.ObjectId" />
                {
                    errors.userid ?
                    <span style={{color:"red"}}>{errors.userid.message}</span>
                    :null
                }
                <br />

                <label>Created By: </label>
                <input onChange={inputHandler} name="createdBy" value={album.createdBy} type="text" />
                {
                    errors.createdBy ?
                    <span style={{color:"red"}}>{errors.createdBy.message}</span>
                    :null
                }
                <br />
                <button>{buttonText}</button>
            </form>
        </div>
    ) 
}
export default Form;