import React,{useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios';

function UpdateUser() {
    const {id} = useParams()
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [age,setAge] = useState();

    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:3000/getUser/'+id)
        .then(result => {
            setName(result.data.name)
            setEmail(result.data.email)
            setAge(result.data.age)
        } )
        .catch(err => console.log(err))
    },[])
    const update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3000/updateUser/"+id,{name,email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='flex h-[100vh] bg-red-200 justify-center items-center'>
    <div className='w-50 bg-white rounded p-3'>
            <h2>Update User</h2>
            <div>
                <form className='flex flex-col'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name' className='mt-1  text-black border'></input>
                    
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Email' className='  text-black border'></input>
                    
                    <label htmlFor='age'>Age</label>
                    <input type='number' name='age' value={age} placeholder='Enter Age' onChange={(e) => setAge(e.target.value)} className='mb-1  text-black border'></input>
                    <button className='bg-green-500 w-16 h-8 rounded  mt-1' onClick={update}>Update</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateUser
