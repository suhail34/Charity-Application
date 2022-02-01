import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useState } from 'react';

const useStyles = makeStyles({
  root : {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "94vh",
  },

  box : {
    boxShadow: "1px 2px 4px 3px gray, 1px 2px 4px 3px gray",
    padding: "2rem",
    borderRadius: ".5rem"
  },
  
  field : {
    margin: ".7rem",
    display: "flex",
    flexDirection: "column",
    width : "30vw"
  },

  text : {
    margin: ".7rem"
  }
})

function Register(){

  const classes = useStyles();
  const [user, setUser] = useState({
    fname:"", lname:"", email:"", phone:"", dob:"", address:""
  });

  
  const handleInputs = function(e){
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user,[name]:value});
  }

  const handleSubmit = function(e){
    console.log("messages : ",user);
    setUser({fname:"",lname:"", email:"", phone:"", dob:"", address:""});
    e.preventDefault();
  }

  return(
    <>
      <div className={classes.root}>
        <form onSubmit={handleSubmit}>
        <div className={classes.box}>
          <div className={classes.field}>
            <div className={classes.text}>First Name: </div>
            <TextField value={user.fname} name="fname" id="outlined-basic" onChange={handleInputs} fullWidth={true} label="Your First Name" variant="outlined" />
          </div>
          <div className={classes.field}>
            <div className={classes.text}>Last Name : </div>
            <TextField value={user.lname} name="lname" id="outlined-basic" onChange={handleInputs} fullWidth={true} label="Your Last Name" variant="outlined" />
          </div>
          <div className={classes.field}>
            <div className={classes.text}>Email Id : </div>
            <TextField value={user.email} type = "email" id="outlined-basic" onChange={handleInputs} fullWidth={true} name="email" label="Your Email eg. example@gmail.com" variant="outlined" />
          </div>
          <div className={classes.field}>
            <div className={classes.text}>Phone No. : </div>
            <TextField value={user.phone} name="phone" type="number" id="outlined-basic" onChange={handleInputs} fullWidth={true} label="Your Phone Number" variant="outlined" />
          </div>
          <div className={classes.field}>
            <div className={classes.text}>Date Of Birth : </div>
            <input value={user.dob} name="dob" style={{padding:".8rem", borderRadius:".2rem"}} type="date" onChange={handleInputs} fullwidth={true} variant="outlined" />
          </div>
          <div className={classes.field}>
            <div className={classes.text} >Address : </div>
            <TextareaAutosize value={user.address} name="address" placeholder="Enter Your Address" style={{padding:".8rem", borderRadius:".2rem"}} id="outlined-basic" onChange={handleInputs} fullWidth={true} variant="outlined" />
          </div>
          <div className={classes.field} style={{paddingLeft:".9rem"}}>
            <Button type="submit" color="error" variant="contained">Register</Button>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Register;