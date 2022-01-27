import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "94vh",
  },

  box: {
    boxShadow: "1px 2px 4px 3px gray, 1px 2px 4px 3px gray",
    padding: "2rem",
    borderRadius: ".5rem"
  },

  field: {
    margin: ".7rem",
    display: "flex",
    flexDirection: "column",
    width: "30vw"
  },

  text: {
    margin: ".7rem"
  }
})

function Login() {

  const classes = useStyles();
  const [user, setUser] = useState({
    email:"", password:""
  })

  const handleInputs = function(e){
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user,[name]:value});
  }

  const handleSubmit=function(e){
    console.log(user);
    e.preventDefault();
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.box}>
          <form onSubmit={handleSubmit}>
            <div className={classes.field}>
              <div className={classes.text}>Email Id : </div>
              <TextField name="email" value={user.email} onChange={handleInputs} type="email" id="outlined-basic" fullWidth={true} label="Your Email" variant="outlined" />
            </div>
            <div className={classes.field}>
              <div className={classes.text}>Password : </div>
              <TextField name="password" value={user.password} onChange={handleInputs} type="password" id="outlined-basic" fullWidth={true} label="Your Password" variant="outlined" />
            </div>
            <div className={classes.field} style={{ paddingLeft: ".9rem" }}>
              <Button onClick={handleSubmit} color="error" variant="contained">Login</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;