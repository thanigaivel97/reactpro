import React, { Component } from 'react'
import '../parallax/parallax.css'
import axios from  'axios'

export default class parallax extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : "",
            lastname : "",
            emailid : "",
            phonenumber : ""
        }
        this.onchangehandler = this.onchangehandler.bind(this);
        this.onsubmithandler = this.onsubmithandler.bind(this);
    }

    onsubmithandler(event){
        event.preventDefault();
        
        const data = new FormData(event.target);
        let emailid = data.get('email');
        let firstname = data.get('firstname');
        let lastname = data.get('lastname');
        let phonenumber = data.get('phonenumber');
        const po = {
            emailid :emailid,
            firstname : firstname,
            lastname :lastname,
            phonenumber : phonenumber
        }
        console.log(emailid,firstname);
       
        fetch('http://localhost:8080/auth/signup',{
            method : 'POST',
            body : JSON.stringify(po),
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => {
            return res.json();
        }).then(da=>{
            console.log(da);
        })
        
        
        
    }

    onchangehandler(e){
        console.log(e.target.name, e.target.value);
        let h = e.target.name;
        
        

    }


    render() {
        return (
        <div>
            <form onSubmit={this.onsubmithandler} style={{border:"1px solid #ccc"}}>
  <div className="container">
    <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="email"><b>Firstname</b></label>
    <input type="text" onChange={this.onchangehandler} placeholder="Enter Firstname" name="firstname" required/>

    <label for="email"><b>LastName</b></label>
    <input type="text" onChange={this.onchangehandler} placeholder="Enter Lastname" name="lastname" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" onChange={this.onchangehandler}  placeholder="Enter Email" name="email" required/>

    <label for="email"><b>Phonenumber</b></label>
    <input type="text" onChange={this.onchangehandler} placeholder="Enter Phonenumber" name="phonenumber" required/>
    

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn">Sign Up</button>
    </div>
  </div>
</form>
             
        </div>
            
        )
    }
}
