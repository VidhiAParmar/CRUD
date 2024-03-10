import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

function User() {
    const [users,setUsers] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000')
        .then(result => setUsers(result.data) )
        .catch(err => console.log(err))
    },[])
    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/deleteUser/'+id)
        .then(res => {console.log(res)
                window.location.reload()
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='flex h-[100vh] bg-red-200 justify-center items-center'>
        <div className='w-90 bg-white rounded p-3'>
            <Link to='/create' className='bg-green-600 rounded outline-none no-underline hover:bg-green-300 text-center text-white'>Add +</Link>
            <table className='w-full'>
                <thead>
                    <tr  className='w-full flex mb-1 '>
                        <th>Name</th>
                        <th className='w-30 ml-3'>Email</th>
                        <th className='ml-36'>Age</th>
                        <th className='ml-14'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr key={Math.random()*1000} className='w-full mt-2 flex justify-start bg-[#fafafa] shadow-sm'>
                                <td className=''>{user.name}</td>
                                <td className='ml-3 w-full'>{user.email}</td>
                                <td className='ml-3'>{user.age}</td>
                                <td className='flex gap-2 ml-3 flex-col md:flex-row'>
                                <Link to={`/update/${user._id}`} className='bg-green-600 rounded outline-none no-underline hover:bg-green-300 text-center text-white'>Update</Link>
                                    <button  className='bg-red-500 w-12 hover:bg-red-300 rounded border' onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default User
