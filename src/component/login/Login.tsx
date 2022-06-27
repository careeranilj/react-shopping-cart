import React, {FC,useEffect,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Link from '@material-ui/core/Link';
import {isUserValid} from '../../service/product.service';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import { Types } from '../../redux/actionTypes';
import { ShoppingContext } from '../../contexts/ShoppingContext';
import shoppingCartActions from '../../redux/actions';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string().required('Password is required.'),
});

const Login: FC = (() => {
  const [open, setOpen] = useState(false);
  const [invalidUser, setInvalidUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string>();
  const {state, dispatch } = React.useContext(ShoppingContext);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const authenticate = (email : string, password : string) => { 
      isUserValid(email, password).then(userFound=> {
        if (userFound){
          setLoggedInUser(`${userFound.name.lastname}, ${userFound.name.firstname}`);         
          dispatch(shoppingCartActions.storeLoginDetails(`${userFound.name.lastname}, ${userFound.name.firstname}`));
        } 
        setOpen(!userFound);
        setInvalidUser(!userFound);
      }).catch(error => {
        console.error('Error during service worker registration:', error);
      });
    }

    useEffect(() => {
      if(!_.isEmpty(state.loggedInUser.lastname) && !_.isEmpty(state.loggedInUser.firstname)){
        setLoggedInUser(`${state.loggedInUser.lastname}, ${state.loggedInUser.firstname}`); 
      }
    }, [state]);
    
    return (
      <div>
      <div>
        <p>Hello, &nbsp;
        {loggedInUser ? 
        <> {loggedInUser}<br />
              <Link
                component="button"
                variant="body2"
                onClick={() => {dispatch(shoppingCartActions.clearLoginDetails()); setLoggedInUser('');}}> 
                Logout
              </Link> </> : 
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
        <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validationSchema={loginSchema}
            onSubmit={values => {
              console.log(values);
              authenticate(values.email, values.password);
            }}
          >
            {({ errors, touched, handleChange}) => (
              <Form>
                <TextField
                  autoFocus
                  margin="dense"
                  name="email"
                  id="outlined-email-input"
                  label="Email Address"
                  type="email"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  error={!_.isEmpty(errors.email) && touched.email}
                  helperText={errors.email}
                />
                <TextField
                  margin="dense"
                  id="outlined-password-input"
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  variant="standard"
                  onChange={handleChange}
                  error={!_.isEmpty(errors.password) && touched.password}
                  helperText={errors.password}
                />
                <DialogActions>
                  <Button type="submit">Continue</Button>
                </DialogActions>
                <Collapse in={invalidUser}>
                  <Alert severity="error">Invalid credentials. Please try again.</Alert>
                </Collapse>
              </Form>
            )}
          </Formik>     
          
        </DialogContent>
      </Dialog>
    </div>
    );
});

export default Login;
export const MemoizedLogin = React.memo(Login);
