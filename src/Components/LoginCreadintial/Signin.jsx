// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { StoreContext } from '../ContextApi/Context';
import app from '../../../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth/web-extension';
import { toast, ToastContainer } from 'react-toastify';
import Container from '../../Layout/Container';


const Singin = () => {
 const Auth = getAuth(app)
  const sign=(e)=>{
    e.preventDefault()
    const name = e.target.name.value
    const image = e.target.image.value
    const password =e.target.password.value
    const email =e.target.email.value
    console.log(name,image,password,email)
    createUserWithEmailAndPassword(Auth, email, password)
    .then(result=>{
        const user =result.user
        toast('Accout create successfull')
        console.log(user)
        
    })
    .catch(err=>{
      console.log(err.message)
    })
   
  }
    return (
      <div className='mx-auto'>
        <Container>
           <div className='flex justify-center'>
             <div className='w-1/3 bg-gray-900 text-white my-10 rounded-xl'>
            <h2 className='text-[22px] font-semibold py-4 text-center'>Sign up Here</h2>
                <form className='flex flex-col items-center gap-4' onSubmit={sign}>
                    <input type="text" name="name" id=""  placeholder='Enter your username' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <input type="text" name="image" id=""  placeholder='Enter your Image URL' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <input type="email" name="email" id=""  placeholder='Enter your email' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <input type="password" name="password" id=""  placeholder='Enter your Password' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Sign Up </button>
                    <h2 className='my-5'>Have an account <Link to={'/login'}><span className='text-blue-500'>Login</span></Link></h2>
                </form>
            </div>
           </div>
        </Container>
        <ToastContainer/>
      </div>
    );
};

export default Singin;