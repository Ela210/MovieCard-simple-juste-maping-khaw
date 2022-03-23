import React from 'react';
import MovieCard from "./MovieCard"

const MovieList = () => {
const list = [
    { title:"the grudge" , 
    url:"https://fr.web.img6.acsta.net/medias/nmedia/18/35/32/64/18398474.jpg" , 
    rate:"7/10"},
{title:"Saw" ,
 url:"https://m.media-amazon.com/images/I/91im2gYZrrL._SL1500_.jpg" , 
 rate:"10/10"},
{title:"Dabbe" 
, url:"https://fr.web.img2.acsta.net/pictures/14/08/26/15/55/253920.jpg" ,
 rate:"9/10"},
{title:"Annabelle"
 , url:"https://m.media-amazon.com/images/M/MV5BOTQwZmQyYzEtODk5ZC00OTY3LWExMjAtYzRjNWFhNGM3MzBlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg" , 
 rate:"8/10"},
 
 { title:"MaMa" , 
 url:"https://img-4.linternaute.com/Qc1KWG6-XJGnqwGEwHtSIB0KQL4=/405x540/a9e77bcb70434b06b939fa54239dc524/ccmcms-linternaute/98203.jpg" , 
 rate:"9/10"},
{title:"Orphan" ,
url:"https://upload.wikimedia.org/wikipedia/en/4/47/Orphanposter.jpg" , 
rate:"10/10"},
{title:"The Nun 2" 
, url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqa8teBl60AQq3PXc2Hjq8xjveoPOODBrVIQ&usqp=CAU" ,
rate:"9/10"},
{title:"The invisible guest"
, url:"https://m.media-amazon.com/images/M/MV5BOTEwYTkzMTMtODEzNC00YWM2LTgxNDMtZWNkNTQzNDVjMWQ2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMDY4NTQ1MA@@._V1_FMjpg_UX1000_.jpg" , 
rate:"10/10"}


];


return (
    <div>  
         <div style={{display:"flex" , flexWrap:"wrap"}}>
          {list.map((el)=>(
    <MovieCard Move={el}/>
    ))}
   </div>
</div>
);
};
export default MovieList;