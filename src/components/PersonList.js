import axios from "axios";
import { useEffect, useState } from "react";


// export const PersonList=()=>{
//     const [state,setState]= useState([])
//     useEffect(()=>{
//         axios.get('https://yts.mx/api/v2/list_movies.json').then((res)=>{
//         console.log(res.data.data['movies'])
//       setState([...res.data.data['movies']])

//     });
// },[]);
//     return <section classNameName="wrapper">
//         <h1>Person List</h1>
//         <div classNameName="movie-content">
//         {
//             state.slice(0,5).map((v,key)=>{
//                 return <div key={key}>
//                     <li > {v.title }</li>
//                     <p><img src={v.large_cover_image} height="100px"/></p>
                    
//                 <div>{v.rating}</div>
//                     </div>
//             })
//         }
//         </div>
//     </section>
// }


export const PersonList=()=>{
    const [state,setState]= useState([])
    useEffect(()=>{
        axios.get('https://api.github.com/users').then((res)=>{
        // console.log(res.data)
      setState([...res.data])

    });
},[]);
    return <section classNameName="wrapper">
        <h1>Person List</h1>
        <div classNameName="movie-content">
        {
            state.slice(0,5).map((v,key)=>{
               console.log(v)
return  <div>
 <p>{v.login}</p>
<span>{v.type}</span>
    </div>
            })
        }
        </div>
    </section>
}