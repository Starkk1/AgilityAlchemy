import React from "react";
import InputField from "../InputFields";
import './SignUp.css'


export default function SignUP() {
  return (
    <main>
      <div className="container">
        <form action="./index.php" method="get">
          <h2>Sign Up </h2>
          <h3>to Agility Alchemist</h3>
          <div className="input-group">
          <InputField type="text" name="Username" />
          </div>
          <div className="input-group">
            <InputField type="email" name="Email"/>
          </div>
          <div className="input-group">
            <InputField type="password" name="Password"/>
          </div>
          <div className="gender-container">
            <label for="gender" className="label" id="gender">Gender</label>
            <div className="radio">
            <InputField type="radio" name="Male" />
            </div>
            <div className="radio">
              <InputField type="radio" name="Female" />
            </div>
          </div>
          <div className="check">
            <label>
              <input type="checkbox" />
              <span>I agree to the terms & conditions</span>
            </label>

          </div>
          <button type="submit">Submit</button>
          <div className="sign-up">
            <p>Already have an account ? <a href="#">Sign in</a></p>
          </div>
        </form>
      </div>
    </main>
  )
}