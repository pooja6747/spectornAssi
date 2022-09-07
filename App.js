import React,{useState, useEffect} from 'react'
import { View } from './component/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('users');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [users, setUsers]=useState(getDatafromLS());
  // input field states
  const [id, setId]=useState('');
  const [fname, setFname]=useState('');
  const [lname, setLname]=useState('');
  const [dob, setDob]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let user={
      id,
      fname,
      lname,
      dob
    }
    setUsers([...users,user]);
  }

  // delete book from LS
  const deleteUser=(id)=>{
    const filteredBooks=users.filter((element,index)=>{
      return element.id !== id
    })
    setUsers(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('users',JSON.stringify(users));
  },[users])

  return (
    <div className='wrapper'>
      <h1>UserList App</h1>
    
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>ID</label>
            <input type="number" className='form-control' required
            onChange={(e)=>setId(e.target.value)} value={id}></input>
            <br></br>
            <label>First Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setFname(e.target.value)} value={fname}></input>
            <br></br>
            <label>Last Name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setLname(e.target.value)} value={lname}></input>
            <br></br>
            <label>DOB</label>
            <input type="date" className='form-control' required
            onChange={(e)=>setDob(e.target.value)} value={dob}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {users.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                  </tr>
                </thead>
                <tbody>
                  <View users={users} deleteUser={deleteUser} />
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setUsers([])}>Remove All</button>
          </>}
          {users.length < 1 && <div>No users are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
