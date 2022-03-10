import logo from './logo.svg';
import './App.css';
import { PersonList } from './components/PersonList';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import Signin from './components/Signin';
import { useEffect, useState } from 'react';
import { async } from '@firebase/util';

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);
  const [newStack, setNewStack] = useState("");

  const [developers, setDevelopers] = useState([]);


  const ref = collection(db, "developers");


  const createUser = async () => {
    //add new users to the collections or add new document
    await addDoc(ref, { name: newName, age: Number(newAge), stack: newStack });
  }


  const updateUser = async (id, age) => {
    const userDoc = doc(db, "developers", id);
    const newFeilds = { age: age + 1 };
    await updateDoc(userDoc, newFeilds);
  }


  const deleteUser = async (id) => {
    console.log(id)
    const userDoc = doc(db, "developers", id);
    await deleteDoc(userDoc);

  }

  useEffect(() => {
    const getDevelopers = async () => {
      const data = await getDocs(ref);
      console.log(data);
      setDevelopers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getDevelopers()


  }, []);

  return (
    <div classNameName="App">
      {/* <Signin/> */}
      <input placeholder='Name...'
        onChange={(e) => {
          setNewName(e.target.value);
        }} />
      <input type="number"
        placeholder='age...'
        onChange={(e) => {
          setNewAge(e.target.value);
        }} />
      <input type="string"
        placeholder='stack...'
        onChange={(e) => {
          setNewStack(e.target.value);
        }} />
      <button onClick={createUser}>Create User</button>
      {developers.map((developer) => {
        return (
          <div className='devs'>
            {" "}
            <div className='dev1'>ID: {developer.id}</div>

            <div className='devlopers'>
              <div className='dev2'>Name: {developer.name}</div>
              <div className='dev3'>Stack: {developer.stack}</div>
              <div className='dev4'>age: {developer.age}</div>
            </div>


            <button onClick={() => {
              updateUser(developer.id, developer.age)
            }}>
              Increase age</button>


            <button onClick={() => {
              deleteUser(developer.id)
            }}> Delete age</button>


          </div>
        )
      })}


    </div>
  );
}

export default App;
