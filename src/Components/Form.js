import React,{useState,useEffect} from 'react'
import { Form,FormGroup,Label,Input } from 'reactstrap';
import PhoneInput from 'react-phone-number-input/input'

export default function Formin() {
    const intialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [value, setValue] = useState()

  const submitForm = () => {
    console.log(formValues);
  };

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

const validate = (values) => {
    let errors = {};
    const regex = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
    // /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Cannot be blank";
    } 
    else if (!regex.test(values.email)) {
      errors.email = "Invalid mobile number";
    }
    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }
    return errors;
  };

useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submitForm();
    }
  }, [formErrors]);
  return (
    <div className="container mt-5">
      <h1>Enter Mobile Number</h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">Signed in successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div>
        {/* <PhoneInput
      placeholder="Enter phone number"
      country="US"
      value={value}
      onChange={setValue}
      
      
      /> */}
          {/* <label htmlFor="email">Email</label> */}
          {/* <div> */}
          <Form>
        <FormGroup>
          <Label for="exampleEmail">Mobile Number</Label>

          <PhoneInput
      placeholder="Enter phone number"
      country="US"
      value={ value}
      onChange={setValue}
      
      // value={formValues.email}
      //       onChange={handleChange}
      //       className={formErrors.email && "input-error"}  name="email" 
      />
          {/* <Input value={formValues.email}
            onChange={handleChange}
            className={formErrors.email && "input-error"} type="email" name="email" id="exampleEmail" placeholder="(206) 125-1234" /> */}
        </FormGroup>
        </Form>
          {/* </div> */}
         
          {/* <input
          style={{left:20}}
            type="email"
            name="email"
            id="email"
           
          /> */}
          {formErrors.email && (
            <span className="error">{formErrors.email}</span>
          )}
        </div>
        {/* <div className="form-row">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            className={formErrors.password && "input-error"}
          />
          {formErrors.password && (
            <span className="error">{formErrors.password}</span>
          )}
        </div> */}
        <button type="submit">Check</button>
      </form>
    </div>
  );
}
