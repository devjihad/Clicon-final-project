import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import appe from '../../../Firebase/Firebase.config';
import app from '../../../Firebase/Firebase.config';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import Container from '../../Layout/Container';


const Login = () => {
  const Auth =getAuth(app)
  const navigate = useNavigate()
  // console.log(value)
    const log =(e)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password = e.target.password.value
        console.log(email,password)

        signInWithEmailAndPassword(Auth, email, password)
        .then(result=>{
        //   const user= result.user
        //   setvalue(user)
          alert(' Login Successfull')
          toast('Login Successfull')
          navigate('/')
          
        
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
            <h2 className='text-[22px] font-semibold py-4 text-center'>Login Here</h2>
                <form className='flex flex-col items-center gap-4' onSubmit={log}>
                    
                    <input type="email" name="email" id=""  placeholder='Enter your email' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <input type="password" name="password" id=""  placeholder='Enter your Password' className=' border-0 outline-0 bg-gray-600 text-white py-2 px-4 w-[80%] rounded-lg'/>
                    <button className='bg-[#FA8232] text-[14px] font-semibold flex items-center gap-1 px-5 py-2 text-white rounded-sm'>Login </button>
                    <h2 className='my-5'>Login done ? <Link to={'/'}><span className='text-blue-500'>Go to Home</span></Link></h2>
                </form>
            </div>
           </div>
        </Container>
        <ToastContainer/>
      </div>
    );
};

export default Login;