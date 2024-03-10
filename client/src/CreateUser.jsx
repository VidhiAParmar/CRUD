import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateUser() {
    
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();

    const navigate = useNavigate()

    const submit=(e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/createUser",{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='flex h-[100vh] bg-red-200 justify-center items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <h2>Add User</h2>
            <div>
                <form className='flex flex-col' onSubmit={submit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' placeholder='Enter Name' onChange={(e) => setName(e.target.value) } className='mt-1  text-black border'></input>
                    
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} className='  text-black border'></input>
                    
                    <label htmlFor='age'>Age</label>
                    <input type='number' name='age' placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} className='mb-1  text-black border'></input>
                    <button className='bg-green-500 w-16 h-8 rounded  mt-1'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default CreateUser
