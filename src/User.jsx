import {useParams} from "react-router-dom"

export default function User () {
    const param = useParams () 
    console.log(param);
    return(
    <div 
    className="one_users">
        Пользователь по номерам {param.id}
    </div>
    )
}