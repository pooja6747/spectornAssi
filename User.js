import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const getDatafromLS=()=>{
    console.log("data");
    const data = JSON.parse(localStorage.getItem('books'));
    console.log(data);
  }

export const User = () => {
    // input field states
  const [id, setID]=useState('');
  const [fname, setFname]=useState('');
  const [lname, setLname]=useState('');
  const [dob, setDob]=useState('');
  const [users, setUsers]=useState([getDatafromLS()]);


  // // form submit event
  const handleAddUserSubmit=(e)=>{
    console.log("handleAddUserSubmit call");
    e.preventDefault();
    // creating an object
    let item={
        id,
        fname,
        lname,
        dob
    }
    setUsers([...users,item]);
    // setTitle('');
    // setAuthor('');
    // setIsbn('');
  }

  // delete book from LS
  // const deleteBook=(isbn)=>{
  //   const filteredBooks=books.filter((element,index)=>{
  //     return element.isbn !== isbn
  //   })
  //   setbooks(filteredBooks);
  // }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
    console.log("useEffect call");
  },[users])


  return (
    <div className='wrapper'>
      <h1>User App</h1>
      <p>Add and view your users details using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group' onSubmit={handleAddUserSubmit}>
            <label>ID</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setID(e.target.value)} value={id}></input>
            <br></br>
            <label>First Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFname(e.target.value)} value={fname}></input>
            <br></br>
            <label>Last Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLname(e.target.value)} value={lname}></input>
            <br></br>
            {/* <label>Married</label>
            <input type="checkbox" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br> */}
            <label>Date of birth</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setDob(e.target.value)} value={dob}></input>
            <br></br>
            {/* <label>Photo</label>
            <input type="url" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br> */}
           <Link to="view"> <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
            </Link>
          </form>
        </div>

      

      </div>
    </div>
  )
}
