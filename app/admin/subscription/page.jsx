'use client'

import SubTableItems from '@/components/AdminComponents/SubTableItems'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {


  const [email, setEmails] = useState([]);

  const fetchEmails = async () => {
    const response = await axios.get('/api/email');
    setEmails(response.data.emails)
  }

  const deleteEmail = async (mongoId) => {

    const response = await axios.delete('/api/email',{
      params:{
        id:mongoId
      }
    }, []);

    if (response.data.success) {
      toast.success(response.data.msg)
      fetchEmails();
      
    } else {
      toast.error("Error");
    }
    

  }

  useEffect(() => {

    fetchEmails();

  }, [])


  
  return (
    <div className='flex-1 pt-5 px-5 font-semibold sm:pt-12 sm:pl-16'>
      <h1>Email Subscriptions</h1>
      <div className='relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-50'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Email Subscription
              </th>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>

          </thead>

          <tbody>
            {email.map((item,index) =>{
              return <SubTableItems key={index} mongoId={item.id} deleteEmail={deleteEmail} email={item.email} date={item.date}/>
            })}
            

          </tbody>

        </table>
      </div>
      
    </div>
  )
}

export default page
