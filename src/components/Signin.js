import { async } from '@firebase/util';
import React, { useState } from 'react'
import '../components/styles.css';
// import '../components/script';
const Signin = () => {
//     const [user, setUser] = useState({
//         name:"",
//         email: "",
//         password: "",
//         address: "",
//         city: "",
//         zip: "",
//     },[]);

//     let name, value;

//     const getUserData = (e) => {
//         name= e.target.name;
//         value= e.target.value;
//         setUser({...user, [name]:value });
// console.log(user)
//         e.preventDefault();
//     };


//     const postData=async(e)=>{

//         e.preventDefault();
// const {name, email,password,address,city,zip}=user;
// {
//     method:"POST",
//     headers: { "Content-Type": "application/json"};
//     body: JSON.stringify({
//         name,
//         email,
//         password,
//         address,
//         city,
//         zip,
//     });
// }  



//         const res = await fetch("https://react-firebase-68085-default-rtdb.firebaseio.com/developers.json");

//     };

//     return (
//         <section >
//             <div className="login-form">
//                 <form className="row g-3" method='POST'>
//                     <div className="col-12">
//                         <label for="inputName" className="form-label">Name</label>
//                         <input name="name" value={user.name} onChange={getUserData} type="text" className="form-control" id="inputName" placeholder="Username" />
//                     </div>
//                     <div className="col-md-6">
//                         <label for="inputEmail4" className="form-label">Email</label>
//                         <input name="email" value={user.email} onChange={getUserData} type="email" className="form-control" id="inputEmail4" />
//                     </div>
//                     <div className="col-md-6">
//                         <label for="inputPassword4" className="form-label">Password</label>
//                         <input name="password" value={user.password} onChange={getUserData} type="password" className="form-control" id="inputPassword4" />
//                     </div>
//                     <div className="col-12">
//                         <label for="inputAddress" className="form-label">Address</label>
//                         <input name="address" value={user.address} onChange={getUserData} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
//                     </div>

//                     <div className="col-md-6">
//                         <label for="inputCity" className="form-label">City</label>
//                         <input name="city" value={user.city} onChange={getUserData} type="text" className="form-control" id="inputCity" />
//                     </div>

//                     <div className="col-md-2">
//                         <label for="inputZip" className="form-label">Zip</label>
//                         <input name="zip" value={user.zip} onChange={getUserData} type="text" className="form-control" id="inputZip" />
//                     </div>

//                     <div className="col-12">
//                         <button type="submit" onClick={postData}  className="btn btn-primary">Register</button>
//                     </div>
//                 </form>
//             </div>

//         </section>
//     )
}

export default Signin