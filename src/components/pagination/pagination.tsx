import React from 'react'
import'./pagination.scss'

const Pagination = ({postsPerPage,totalPosts,paginate,currentPage})=>{
 const pageNumbers =[];
 
 for(let i = 1;i<= Math.ceil(totalPosts/postsPerPage);i++){
     pageNumbers.push(i)
 }
 return(
     <ul>
         <li>
         <a onClick={()=>paginate("previous")}>&lt;
         </a>
         </li>
         {pageNumbers.map(number=>(<li key={number}>
             <a style={currentPage === number? {color: "rosybrown"}: {color:"white" }} onClick={()=> paginate(number)}>
                 {number}
             </a>
         </li>))}
         <li>
         <a onClick={()=>paginate("next",pageNumbers.length)}>&gt;</a>
         </li>
     </ul>
 )
         }


export default  Pagination;
