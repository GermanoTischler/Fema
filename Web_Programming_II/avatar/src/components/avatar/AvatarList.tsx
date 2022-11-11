import { Link } from "react-router-dom";


export function AvatarList () {

    return (
        <>
            <h1>Hello Avatar</h1>

            <Link to={'/avatar/registry'}>Register</Link>
        </>
    )
}