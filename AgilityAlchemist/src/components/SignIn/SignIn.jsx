import React from "react";
import InputField from "../InputFields";
import "./SignIn.css"

export default function SignIn(){
    return(
        <main>
      <div className="container">
        <form action="./index.php" method="get">
          <h2>Sign In </h2>
          <h3>to Agility Alchemist</h3>
          <div className="input-group">
            <InputField type="email" name="Email"/>
          </div>
          <div className="input-group">
            <InputField type="password" name="Password"/>
          </div>
          <button type="submit">Submit</button>
          <div className="sign-up">
            <p>Don't have an account <a href="#">Sign Up</a></p>
          </div>
        </form>
      </div>
    </main>
    )
}