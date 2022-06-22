import React, {FC,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import {isUserValid} from '../../service/product.services';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const Login: FC = (() => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string>();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleContinue = () => {
      isUserValid(email, password).then(userFound=> {
        if (userFound){
          setLoggedInUser(`${userFound.name.lastname}, ${userFound.name.firstname}`);
        } 
        setOpen(!userFound);
        setInvalidUser(!userFound);
      }).catch(error => {
        console.error('Error during service worker registration:', error);
        });
    };  

    return (
        <div>
      <div>
        <p>Hello, &nbsp;
        {loggedInUser ? loggedInUser : 
          <><Link
                component="button"
                variant="body2"
                onClick={handleClickOpen}>
                Sign in
              </Link><br />To Add Products to Cart</>}
          
        </p>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Sign-In</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            onChange={event => setEmail(event.target.value)}
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="outlined-password-input"
            label="Password"
            onChange={event => setPassword(event.target.value)}
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleContinue}>Continue</Button>
        </DialogActions>
        <Collapse in={invalidUser}>
          <Alert severity="error">Invalid credentials. Please try again.</Alert>
        </Collapse>
      </Dialog>
    </div>
    );
});

export default Login;
