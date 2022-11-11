import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";


export function AvatarRegistry () {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');

    function salvar(event:any) {
        event.preventDefault();

        let avatar: Avatar = {
            name: name,
            img: img
        }

        AvatarService.salvar(avatar);
    }

    return (
        <>

            <h1>Registry</h1>
        
            <Link to={'/avatar'}>Back</Link>

            <div>
                <label>Name</label>
                <input type="text" onChange={(event) => setName(event.target.value)}/>
            </div>
            <div>
                <label>Avatar (img)</label>
                <input type="text" onChange={(event) => setImg(event.target.value)}/>
            </div>

            <button>Save</button>
        </>
    )
}