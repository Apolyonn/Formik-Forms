import React from "react";
import {useFormik} from "formik"
// TODO: import useFormik from formik library

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Succesful");
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field required';
      else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
          values.email)) errors.email = 'User name should be an email address';
      if(!values.password) errors.password = 'Field required';
      return errors;
    }
  });// TODO: add a const called formik assigned to useFormik()

  return (
    
      <form onSubmit={formik.handleSubmit}>
      
        <div id ="emailField">Email:</div>
        <input type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id ="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
        <div id ="pswField">Password:</div>
        <input type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
        {formik.errors.password ? <div id ="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
        <button id ="submitBtn" type="submit">Submit</button>
      </form>      
    
  );
}


    

export default App;
