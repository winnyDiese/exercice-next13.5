"use client"
import { useState } from "react"

export default function LikeButton(){
    let [isLike, setIsLike] = useState(false)
    return(
        <div>
            <button className="bg-sky-200 p-2 pt-0 pb-0 italic" onClick={()=>setIsLike(!isLike)}>
                {isLike ? "unLike" : "Liked"}
            </button>
            {/* <a className="bg-sky-300 p-2 pt-0 pb-0" onClick={()=>alert('You liked this !')}>Like</a> */}
        </div>
    )
}