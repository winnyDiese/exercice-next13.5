import LikeButton from "./LikeButton"


export default function Post({data}){
    let {title, body, id} = data
    return (
        <div>
            <h2 className="text-xl font-bold uppercase">{title} </h2>
            <p className="mb-4 text-slate-500 italic">{body} <LikeButton/> </p>
        </div>
    )
}
