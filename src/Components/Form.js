import './form1.css';
import React, {useState} from 'react';
import adx_icon from './adx_icon.jpeg';

function Form() {
  const [name , setName] = useState('');
  const [age , setAge] = useState('');
  const [email , setEmail] = useState('');

  // function to update state of name with
  // value enter by user in form
  const handleChange =(e)=>{
    setName(e.target.value);
  }
  // function to update state of age with value
  // enter by user in form
  const handleAgeChange =(e)=>{
    setAge(e.target.value);
  }
  // function to update state of email with value
  // enter by user in form
  const handleEmailChange =(e)=>{
    setEmail(e.target.value);
  }
  // below function will be called when user
  // click on submit button .
  const handleSubmit=(e)=>{
    e.preventDefault();

  }
return (
  <div className="App1">
  <header className="App-header">
  <form onSubmit={(e) => {handleSubmit(e)}}>
  <img className='headericon' alt="" style={{ height:"50px",width:"70px"}} src={adx_icon}></img>
   {/*when user submit the form , handleSubmit()
      function will be called .*/}
  <h2> ADX-3D </h2>
      <label >
        Name:
      </label><br/>
      <input type="text" value={name} required onChange={(e)=> {handleChange(e)}} /><br/>
        { /*when user write in name input box , handleChange()
            function will be called. */}
      <label >
        Age:
      </label><br/>
      <input type="text" value={age} required onChange={(e)=> {handleAgeChange(e)}} /><br/>
          { /*when user write in age input box , handleAgeChange()
             function will be called. */}
      <label>
        Email:
      </label><br/>
      <input type="email" placeholder='example@domainname.com' value={email} required onChange={(e)=> {handleEmailChange(e)}} /><br/>
        {/* when user write in email input box , handleEmailChange()
            function will be called.*/}
        
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSefrHzrHkgPSYa0C1AYZ2vyUShOyo03svOSPnA7VUO3mk6azA/viewform?usp=sf_link" target="_blank">ADD Your CAD file here</a><br/>
      <input type="submit" value="Submit"/>
    </form>
  </header>
  </div>
);
}

export default Form