import React, {useEffect, useState} from "react";



const Form = (props) => {
    
    const {submitHandler, buttonText, album,  setAlbum, errors} = props;
    // console.log(album)
    // console.log(album.bandName)
    const newChangeHandler = (e) => {
        let newStateObject = {...album};
        console.log(album)
        newStateObject[e.target.name] = e.target.value;
        setAlbum(newStateObject);
    }

    return (
        <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="">Band Name:</label>
            <input onChange={newChangeHandler} name="bandName" type="text" value={album.bandName}/>
            {
                errors.bandName?
                <span style={{color:"red"}}>{errors.bandName.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="albumName">Album Name:</label>
            <input onChange={newChangeHandler} name="albumName" type="text" value={album.albumName}/>
            {
                errors.albumName?
                <span style={{color:"red"}}>{errors.albumName.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="image">Image URL:</label>
            <input onChange={newChangeHandler} name="image" type="text" value={album.image}/>
            {
                errors.image?
                <span style={{color:"red"}}>{errors.image.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="era">Release Year:</label>
            <select onChange={newChangeHandler} name="era" value={album.era}>
                <option value="none" defaultValue hidden>Select An era</option>
                <option value ="1920">1920s</option>
                <option value ="1930">1930s</option>
                <option value ="1940">1940s</option>
                <option value ="1950">1950s</option>
                <option value ="1960">1960s</option>
                <option value ="1970">1970s</option>
                <option value ="1980">1980s</option>
                <option value ="1990">1990s</option>
                <option value ="2000">2000s</option>
                <option value ="2010">2010s</option>
                <option value ="2020">2020s</option>
            </select>
            {
                errors.era?
                <span style={{color:"red"}}>{errors.era.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="genre">Genre</label>
            <select onChange={newChangeHandler} name="genre" value={album.genre}>
                <option value="none" defaultValue hidden>
                    Select A Genre
                </option>
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
            </select>
            {
                errors.genre?
                <span style={{color:"red"}}>{errors.message}</span>
                :null
            }
        </div>
        <div>
            <label htmlFor="rating">Rating</label>
            <input onChange={newChangeHandler} name="rating" type="number" value={album.rating}/>
            {
                errors.rating?
                <span style={{color:"red"}}>{errors.rating.message}</span>
                :null
            }
        </div>
        {/* <div>
            <label>User ID: </label>
            <input onChange={newChangeHandler} name="userid" value={album.userid} type="mongoose.Schema.Types.ObjectId" />
                {
                    errors.userid ?
                    <span style={{color:"red"}}>{errors.userid.message}</span>
                    :null
                }
        </div>
        <div>
            <label>Created By: </label>
            <input onChange={newChangeHandler} name="createdBy" value={album.createdBy} type="text" />
                {
                    errors.createdBy ?
                    <span style={{color:"red"}}>{errors.createdBy.message}</span>
                    :null
                }
        </div> */}
        <button>{buttonText}</button>
    </form>
    )
}
export default Form;