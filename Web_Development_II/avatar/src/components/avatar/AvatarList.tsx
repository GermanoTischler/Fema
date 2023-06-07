import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";


export function AvatarList () {

    const [avatarList, setAvatarList] = useState<Avatar[]>();

    useEffect(() => {
        setAvatarList(AvatarService.list);
    }, []);

    return (
        <>
            <h1>Avatar List Page</h1>

            <Link to={'/avatar/registry'}>Register Avatar</Link>

            <ul>
                {avatarList?.map(avatar => (
                    <li key={avatar.id}>
                        {avatar.name}

                        <Link to={'/avatar/registry/' + avatar.id}>Edit</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}