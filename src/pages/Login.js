import React from 'react'
import Header from '../components/Header'
import Heading from '../components/Heading'
import InputBox from '../components/InputBox'
import LButton from '../components/LButton'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Logo from '../components/Logo'
import AuthentticationLink from '../components/AuthentticationLink'
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"


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

const Login = () => {
  return (
    <div className='registration'>
      <Logo/>
        <Header>
            <Heading className="heading" as="p" title="Login to your account!"/>
            <p className='regpara'>Free register and you can enjoy it</p>
        <div className='authLogo'>
            <FcGoogle/>
            <FaFacebook style={{color:"rgb(51, 56, 158)", marginLeft:"24px" }}/>
        </div>
        </Header>
        <div className='inputbox'>
        <InputBox className="reginput" label="Email Address" variant="outlined"/>
        <InputBox className="reginput" label="Password" variant="outlined"/>
        </div>

        <LButton bname={CommonButton} title="Sign In"/>

        <AuthentticationLink className="reglink" title="Don't have an account?" hreftitle="Sign up" href="/"/> 
    </div>
  )
}

export default Login