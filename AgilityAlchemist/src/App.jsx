import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import SignUP from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'

function SignUpPage(){
    return(<>
    <SignUP/>
    <Footer/>
    </>)
}

function SignInPage()
{
    return(
        <>
        <SignIn/>
        <Footer/>
        </>
    )
}

function App() {
return(
SignUpPage()
)
}

export default App
