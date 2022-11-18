import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";


export function AvatarRegistry () {

    const navigate = useNavigate();
    //Destructuring
    const { id } = useParams();

    const [avatar, setAvatar] = useState<Avatar>({name: '', img: ''});

    //const [cod, setCod] = useState('');
    //const [name, setName] = useState('');
    //const [img, setImg] = useState('');

    function valueChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setAvatar({...avatar, [name]: value})
    }

    useEffect(() => {
        if(id) {
            let avatar = AvatarService.searchById(id);
            if (avatar) {
                setAvatar(avatar);
            }
            
            //setCod(avatar && avatar?.id ? avatar?.id : '');
            //setName(avatar ? avatar?.name : '');
            //setImg(avatar ? avatar?.img : '');
        }

    }, []);

    function save(event:any) {
        event.preventDefault();

        //let avatar: Avatar = {
        //    name: name,
        //    img: img
        //};
        
        if(avatar) {
            AvatarService.save(avatar);
        }
        
        navigate('/avatar');
    }

    return (
        <>
            <Link to={'/avatar'}>Back</Link>

            <h1>Avatar Registry Page</h1>

            <form onSubmit={save}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={avatar.name} onChange={valueChange}/>
                </div>
                <div>
                    <label>Avatar (img)</label>
                    <input type="text" name="img" value={avatar.img} onChange={valueChange}/>
                </div>

                <button>Save</button>
            </form>
        </>
    );
}