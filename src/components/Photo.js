import React from "react"
import Explanation from "./Explanation"






const Photo = ({photo}) => {
     



 return (
   <>
     {photo.media_type === "image" ? (
       <div>
         <h2> {photo.date}</h2>
         <h2> {photo.title}</h2>
         )
         <img className="apod" src={photo.url} alt={photo.title} />
         <Explanation photo={photo} />
       </div>
     ) : (
       <iframe
         title="space-video"
         src={photo.url}
         frameBorder="0"
         gesture="media"
         allow="encrypted-media"
         allowFullScreen
       />
     )}
   </>
 );

     }





 export default Photo;