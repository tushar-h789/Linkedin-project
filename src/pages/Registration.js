import React, { useState } from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import LButton from '../components/LButton'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Logo from '../components/Logo'
import AuthentticationLink from '../components/AuthentticationLink'


const CommonButton = styled(Button)({
  width: "100%",
  fontSize: "20.64px",
  padding: '10px 0',
  backgroundColor: '#086FA4',
  fontFamily: ['Nunito', "sans-serif"],
  borderRadius: "86px",
  
  '&:hover': {
    backgroundColor: '#072B3F',
  },
  
});

const Registration = () => {

  let [FormData, setFormData] = useState({
    email: "",
    fullname: "",
    password: "",
  })

  let handleForm = (e)=>{
    let {name, value} = e.target

    setFormData({...FormData, [name]:value})
    console.log(FormData)
  }

  return (
    <div className='registration'>
      <Logo/>
        <Header>
            <Heading className="heading" as="p" title="Get started with easily register"/>
            <p className='regpara'>Free register and you can enjoy it</p>
        </Header>
        <div className='inputbox'>
        <InputBox type="email" name="email" textChange={handleForm} className="reginput" label="Email Address" variant="outlined"/>
        <InputBox type="text" name="fullname" textChange={handleForm} className="reginput" label="Full Name" variant="outlined"/>
        <InputBox type="password" name="password" textChange={handleForm} className="reginput" label="Password" variant="outlined"/>
        </div>

        <LButton bname={CommonButton} title="Sign Up"/>

        <AuthentticationLink className="reglink" title="Already have an accoutn?" hreftitle="Sign In" href="/login"/> 
    </div>
  )
}

export default Registration