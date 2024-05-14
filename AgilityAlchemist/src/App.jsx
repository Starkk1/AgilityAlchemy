import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/* import Footer from './components/Footer' */
/* import SignUP from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'  */
import './App.css'
import Home from './components/HomeNotUser/Home' 


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
<>
<Home/>
</>
)
}

export default App
