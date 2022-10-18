// import React, { useState } from "react";
// import QRCode from "qrcode";

// function App() {
//   const [url, setUrl] = useState("");
//   const [qrcode, setQrcode] = useState("");

//   const GenerateQRCode = () => {
//     QRCode.toDataURL(url, (err, url) => {
//       if (err) return console.error(err);
//       console.log(url);
//       setQrcode(url);
//     });
//   };
//   return (
//     <div className="app">
//       <h1>QR Code Generator</h1>
//       <input
//         type="text"
//         placeholder="e.g. https://google.com"
//         value={url}
//         onChange={(evt) => setUrl(evt.target.value)}
//       />
//       <button onClick={GenerateQRCode}>Generator</button>
//      {qrcode && <>
//       <img src={qrcode}/> 
//       <a href={qrcode} download="qrcode.png">Download</a>
     

//      </>}
//     </div>
//   );
// }

// export default App



import { useState } from "react";
import "./App.css";

export default function App() {
  //0 is for light, 1 is for dark
  const [theme, setTheme] = useState(0);
  const handleClick = () => {
    setTheme(!theme);
  };

  console.log("theme==>",theme)
  return (
    <div
      className="App"
      style={{
        backgroundColor: theme ? "black" : "white",
        height: "100vh",
        width: "100vw",
        // overflow: "hidden"
      }}
    >
      <div className="toggle-slide" onClick={handleClick}>
        <div className={`switch ${theme ? "slide " : ""}`}></div>
      </div>
    </div>
  );
}







































// // import "./styles.css";
// import { useState } from "react";
// import { useCallback, useEffect,  } from 'react';

// import './App.css';
// import Box from "./Components/Box";
// import {Card,CardBody,CardImg,Col,Container,Row} from 'reactstrap'
// // import Box from './Component/Box';
// // import { nanoid } from "nanoid";




// function Comp2({ deleteHandeler, id,index,setIds, }) {
//   const [selectedid, setSelected] = useState(id);
//   const [isActive, setIsActive] = useState(false);

//   const [color,setColor]=useState('#000');
//   const getRgb=()=>Math.floor(Math.random()*256);
//   const rgbToHex = (r,g,b) =>
//   '#' +
//   [r,g,b].map(x=>{
//       const hex=x.toString(16);
//       return hex.length ===1 ?'0' + hex : hex ;

//   }).join('');

//   const handleGenerate = () => {
//       const color = {
//           r : getRgb(),
//           g : getRgb(),
//           b : getRgb(),
//       };

//       setColor(rgbToHex(color.r,color.g,color.b));
//   };

//   const handleSelected = (value) => {
//     setSelected(value);
//     setIsActive(current => !current);
//     console.log("selectid",selectedid)
//   };
  

//   document.onkeydown = checkKey;

//   function checkKey(e,) {
  
//       e = e || window.event;
  
//       if (e.keyCode == '38' ) {
//           // up arrow
//       }
//       else if (e.keyCode == '40') {
//           // down arrow
//       }
//       else if (e.keyCode == '37') {
//          // left arrow
//       }
//       else if (e.keyCode == '39') {
//          // right arrow
//       }
  
//   }
  
//   return (
//     <div style={{display:'block'}}>
//       {/* {id} */}
//      {/* {!selectedid ? ( <input
//         type="button"
//         id="delete"
//         value="Delete"
//       />):( <input
//         type="button"
//         id="delete"
//         value="Delete"
//         onClick={deleteHandeler}
//       />)} */}
//     {/* <input
//         type="button"
//         id="delete"
//         value="delete"

//         onClick={deleteHandeler}
//       /> */}

     
// <Box
//         id={id}
//         // selected={setIds}
//         key={index}
//         onClick={()=>{handleSelected(id)
//           handleGenerate()
          
//         }}
//         selected={selectedid}
//         x={100}
//         y={100}

//         checkKey={checkKey}
//         backgroundColor={{backgroundColor:color}}
        
//         color= {
//           isActive ?  "pink" : "skyblue"
//         }
//         border = {
//         "solid 4px #000000"  
//         }

        
//         // '5px solid red'
//         // border-radius={"11px"}
//       />
//     </div>
//   );
// }
// let number = 0

// function Comp1() {
//   const [ids, setIds] = useState([]);
 

  
 
//   // const addHandeler = () => {
//   //   const newId = nanoid();

//   //   setIds((ids) => [...ids, newId]);
//   // };
//   // const [count setCount] = useState(0)
//   // 
//     // setCount(count + 1)
//   const addHandeler = () => { 

  
// // console.log("count",count)
//     // 👇️ get number between min (inclusive) and max (inclusive)
//     // const newId = Math.floor(Math.random() * 1000); 
//     const newId = number + 1
//     number = newId
//     console.log("number",number)
//     // (max - min + 1)) + min;
//     setIds((ids) => [...ids, newId])
//   }



 
//     const [color,setColor]=useState('#000');
//     const getRgb=()=>Math.floor(Math.random()*256);
//     const rgbToHex = (r,g,b) =>
//     '#' +
//     [r,g,b].map(x=>{
//         const hex=x.toString(16);
//         return hex.length ===1 ?'0' + hex : hex ;

//     }).join('');

//     const handleGenerate = () => {
//         const color = {
//             r : getRgb(),
//             g : getRgb(),
//             b : getRgb(),
//         };

//         setColor(rgbToHex(color.r,color.g,color.b));
//     };

  
 
//   // const deleteHandeler = (removeId,selectedid) =>
//   //   setIds((ids) => ids.filter((id) => id !== removeId));
    
//   const deleteHandeler = (selectedid,id,removeId) => {
//     setIds(ids.filter(el => ids.id))
// }
// //  function handleRemove(id) {
// //     const newList = list.filter((item) => item.id !== id);

// //     setList(newList);
// //   }
//   return (
//     <div style={{backgroundColor:color}}>

//       <h1>{number + 0}</h1>

//       {ids.map((id,e ,index) => (
//         <Comp2 key={id} id={id} 
        
//         />
//       ))}
//       {/* <Comp2/> */}
//      { console.log("id",ids)}
//       <input type="button" id="add" value="Add" style={{color:color}} onClick={() => {
//           addHandeler();
//           handleGenerate();
//         }}></input> 
//       <input type="button" value="Delete"  id="delete"  onClick={deleteHandeler}/>

//       {/* {ids.map((id,e ,index) => (   
//   <input
//         type="button"
//         id="delete"
//         value="Delete"
//         onClick={() => deleteHandeler(id)}
//       />
//       ))} */}

// {/* {selectedid === selectedid ? (<input
//         type="button"
//         id="delete"
//         value="Delete"
//         onClick={() => deleteHandeler(id)}
//       />):(<input
//         type="button"
//         id="delete"
//         value="Delete"
//         // onClick={() => deleteHandeler(id)} */}
//       {/* />)} */}


// {/* {selectedid == ids ?  (<> <input
//         type="button"
//         id="delete"
//         value="Delete"
//         onClick={() => deleteHandeler(selectedid)}
//       /></>) : (<input
//       type="button"
//       id="delete"
//       value="Delete"
//       // onClick={() => deleteHandeler(id)}
//     />
// )} */}
//   {/* <button
//             type="button"
//             onClick={() => deleteHandeler(ids)}
//           >
//             Delete
//           </button> */}

//       {/* deleteHandeler={() => deleteHandeler(id)} */}
//  {/* <input
//       type="button"
//        id="delete"
//          value="Delete"
//         onClick={() => deleteHandeler()}
//       />  */}
//       {/* <button  onClick={() => deleteHandeler()} >delete item</button> */}
//     </div>
//   );
// }


// export default function App({id,selectedid,newId,number}) {
//   const [top, setTop] = useState(100);
//   const [left, setLeft] = useState(50);
//   const pixelDistance = 5;

//   const move = useCallback((direction) => {
//     switch (direction) {
//       // adding logic here to prevent div from leaving the area.
//       // reddit comment
//       case 'up':
//         setTop((top) => (top - pixelDistance >= 0 ? top - pixelDistance : 0));
//         // for (let i = 0; i < 50; i += 1) {
//         //   setTop(top - 1);
//         // }
//         break;
//       case 'down':
//         setTop((top) =>
//           top + pixelDistance <= 280 ? top + pixelDistance : 280
//         );
//         break;
//       case 'left':
//         setLeft((left) =>
//           left - pixelDistance >= 0 ? left - pixelDistance : 0
//         );
//         break;
//       default:
//         setLeft((left) =>
//           left + pixelDistance <= 280 ? left + pixelDistance : 280
//         );
//         break;
//     }
//   }, []);

//   const onKeyDown = useCallback(
//     (e) => {
//       // This should now use e.key because e.keyCode is depreciated
//       // it was originall e key code (reddit comment)
//       switch (e.code) {
//         case 'ArrowUp':
//           move('up');
//           break;
//         case 'ArrowDown':
//           move('down');
//           break;
//         case 'ArrowLeft':
//           move('left');
//           break;
//         case 'ArrowRight':
//           move('right');
//           break;
//         default:
//           console.log('Do nothing', e.code);
//       }
//     },
//     [move]
//   );

//   useEffect(() => {
//     document.addEventListener('keydown', onKeyDown);
//     return () => {
//       document.removeEventListener('keydown', onKeyDown);
//     };
//   }, [onKeyDown]);

//   return (
//     <div style={{
//       display: 'block', width: 700, padding: 30
//   }}>
//     <div className="controller">
//         <button onClick={() => move('up')}>Up</button>
//         <button onClick={() => move('down')}>Down</button>
//         <button onClick={() => move('left')}>Left</button>
//         <button onClick={() => move('right')}>Right</button>
//         <button onClick={() => move('right')}>ADD</button>

//       </div>
//               <Container>
//               <Row className="fadeIn">
//       <Col  className="md=12 ml-auto mr-auto ">
//        <Card>
//         <CardBody>
//       <h1>Hello CodeSandboxerr</h1>
//       <Comp1

//        />

//        <Box top={top} left={left}/>
//        </CardBody>
//        </Card>
//        </Col>
//        </Row>
//        </Container>
//     </div>
//   );
// }


// App.js

// import { useState } from "react";
// import "./App.css";

// // import { useState } from "react";

// function App(){

//     const [passwordType, setPasswordType] = useState("password");
//     const [passwordInput, setPasswordInput] = useState("");
//     const handlePasswordChange =(evnt)=>{
//         setPasswordInput(evnt.target.value);
//     }
//     const togglePassword =()=>{
//       if(passwordType==="password")
//       {
//        setPasswordType("text")
//        return;
//       }
//       setPasswordType("password")
//     }
//     return(

//         <div className="row">
//             <div className="col-sm-3">
//                 <div className="input-group my-4 mx-4">
//                     <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />
//                     <div className="input-group-btn">
//                      <button className="btn btn-outline-primary" onClick={togglePassword}>
//                      { passwordType==="password"? <i className="bi bi-eye-slash"></i> :<i className="bi bi-eye"></i> }
//                      </button>
//                     </div>
//                 </div>
                
//             </div>
//       </div>
      
//     )

// }
// export default ShowAndHidePassword;

// function App() {
//   const [formInput, setFormInput] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [formError, setFormError] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleUserInput = (name, value) => {
//     setFormInput({
//       ...formInput,
//       [name]: value,
//     });
//   };

//   const validateFormInput = (event) => {
//     event.preventDefault();
//     let inputError = {
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };

//     if (!formInput.email && !formInput.password) {
//       setFormError({
//         ...inputError,
//         email: "Enter valid email address",
//         password: "Password should not be empty",
//       });
//       return
//     }

//     if (!formInput.email) {
//       setFormError({
//         ...inputError,
//         email: "Enter valid email address",
//       });
//       return
//     }

//     if (formInput.confirmPassword !== formInput.password) {
//       setFormError({
//         ...inputError,
//         confirmPassword: "Password and confirm password should be same",
//       });
//       return;
//     }

//     if (!formInput.password) {
//       setFormError({
//         ...inputError,
//         password: "Password should not be empty",
//       });
//       return
//     }

//     setFormError(inputError);
//   }

//   return (
//     <div className="App-container">
//       <div className="card">
//         <div className="card-header">
//           <h4 className="title">Simple Form</h4>
//         </div>

//         <div className="card-body">
//           <form onSubmit={validateFormInput}>
//             <p className="label">Email</p>
//             <input
//               value={formInput.email}
//               onChange={({ target }) => {
//                 handleUserInput(target.name, target.value);
//               }}
//               name="email"
//               type="text"
//               className="input"
//               placeholder="Enter Email"
//             />
//             <p className="error-message">{formError.email}</p>

//             <p className="label">Password</p>
//             <input
//               value={formInput.password}
//               onChange={({ target }) => {
//                 handleUserInput(target.name, target.value);
//               }}
//               name="password"
//               type="password"
//               className="input"
//               placeholder="Password"
//             />
//             <p className="error-message">{formError.password}</p>

//             <p className="label">Confirm Password</p>
//             <input
//               value={formInput.confirmPassword}
//               onChange={({ target }) => {
//                 handleUserInput(target.name, target.value);
//               }}
//               name="confirmPassword"
//               type="password"
//               className="input"
//               placeholder="Confirm Password"
//             />
//             <p className="error-message">{formError.confirmPassword}</p>

//             <input type="submit" className="btn" value="Submit" />
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;






// // import React from 'react';
// // import { Container, Row, Col } from 'react-grid';
// //  import './App.css'
// //  import {
// //   Card,
// //   CardBody,

// //   Table,
// //   Form,
// //   FormGroup,
// //   Button,
// //   Label,

// // } from "reactstrap";
// // export default function App() {
// //   return (
// //     // <Container >
// //     //   <Row >
// //     //     <Col md="3" class="column"><h1> hiii
// //     //     </h1> </Col>
// //     //     <Col><h1> hello
// //     //     </h1> </Col>
// //     //     <Col class="row"><h1> hiii
// //     //     </h1> </Col>
// //     //   </Row>
// //     // </Container>
// //     <div>
// // <h1>Grid Container</h1>

// // <p>A Grid Container consists of grid items arranged in columns and rows</p>
// // <Row>
// //               <Col md="1"></Col>
// //               <Col md="10">
// //                 <Card className="card-user">
// //                   <CardBody>
// // <div class="grid-container" >
// //   <div >
// //     <h1 className="project_detail_pf d-inline">hklgkfjhfgjh</h1></div>
// //   {/* <div>2</div> */}
// //   <div>3</div>
// //   <div>4</div>
// //   {/* <div>5</div> */}
// //   <div>6</div>
// //   <div>7</div>
// //   <div>8</div>
// // </div>
// // </CardBody>
// // </Card>
// // </Col>
// // </Row>
// // {/* <p>Direct child elements(s) of the grid container automatically becomes grid items.</p> */}
// //     </div>

// //   );
// // }

// // import React, { useState } from 'react';
// // const App = () => {

// // const [values,setValues]=useState({first:"",second:"",sum:""})
// // const [first,setFirst]=useState('')
// // const [second,setSecond]=useState('')
// // const [sum,setSum]=useState('')
// // const onChange=(e)=>{
// //     let name=e.target.name;
// //     let value=e.target.value;
// //     const newValues = {
// //     ...values,
// //     [name]: value
// // }
// // setValues(newValues)
// // calcSum(newValues)
// // calcfirst(newValues)
// // calcSecond(newValues)

// // }
// // const calcSum = (newValues) => {
// // const { first,second} = newValues;
// // const newSum = parseInt(first,10)+parseInt(second,10)
// // setSum(newSum)
// // }
// // const calcfirst = (newValues) => {
// // const { sum,second} = newValues;
// // const newFirst = parseInt(sum,10)-parseInt(second,10)
// // setFirst(newFirst)
// // }
// // const calcSecond = (newValues) => {
// // const { sum,first} = newValues;
// // const newSecond = parseInt(sum,10)-parseInt(first,10)
// // setSecond(newSecond)
// // }

// // return ( <form>
// //        <div style={{display:"flex",flexDirection:"column"}}>
// //         <label htmlFor="first">First</label>
// //         <input onChange={onChange} defaultValue={first} name='first' id="first" type="number"/>

// //         <label htmlFor="second">Second</label>
// //         <input onChange={onChange} defaultValue={second} name="second"  id="second" type="number"/>

// //         <label htmlFor="sum">Total</label>
// //         <input onChange={onChange} defaultValue={sum} id="sum" name="sum" type="number"/>

// //        </div>
// //     </form> );
// // }

// // export default App;

// import React from "react";

// import { useState } from "react";
// import "./App.css";
// import { useForm, Controller } from "react-hook-form";
// import {
//   Card,
//   Col,
//   Container,
//   Form,
//   Row,
//   Tabs,
//   Tab,
//   Accordion,
//   Button,
//   Modal,
//   Table,
//   FloatingLabel,
// } from "react-bootstrap";
// const App = () => {
//   const [message, setMessage] = useState(
//     "https://www.youtube.com/embed/E7wJTI-1dvQ"
//   );

//   // const handleChange = event => {

//   //   setMessage(
//   //     event.target.value
//   //    );

//   //   console.log('value is:', event.target.value);
//   // };
//   // https://www.youtube.com/embed/E7wJTI-1dvQ
//   // return (
//   //   <div>
//   //     <Col md="6">
//   //       <Form.Group className="mb-2">
//   //         <FloatingLabel
//   //           controlId="floatinglastName"
//   //           label="Last Name"
//   //           className="mb-3 input-required"
//   //         >
//   //           {/* <Controller
//   //             name="lastName"
//   //             // control={control}
//   //             // defaultValue={lname}
//   //             // render={({ field: { onChange } }) => ( */}

//   //               <Form
//   //                 disabled
//   //                 name="lastName"
//   //                 placeholder="Last Name"
//   //                 type="text"
//   //               />
//   //             {/* )} */}
//   //           {/* /> */}
//   //         </FloatingLabel>
//   //       </Form.Group>
//   //       {/* <Button variant="primary" onClick={() => setModalShow(true)}>
//   //                                 Launch vertically centered modal
//   //                               </Button> */}
//   //     </Col>
//   //     <div className="form-floating">
//   //       <textarea
//   //         class="form-control"
//   //         placeholder="Leave a comment here"
//   //         id="floatingTextarea"
//   //       ></textarea>
//   //       <label for="floatingTextarea">Comments</label>
//   //     </div>
//   //   </div>

//   //   //     <div>
//   //   //       {/* <input
//   //   //         type="text"
//   //   //         id="message"
//   //   //         name="message"
//   //   //         onChange={handleChange}
//   //   //         value={message}
//   //   //       /> */}

//   //   //       {/* <h2>Message: {message}</h2> */}
//   //   //       <div>
//   //   //       <iframe src={message}
//   //   //     frameborder='0'
//   //   //     allow='autoplay; encrypted-media'
//   //   //     allowfullscreen
//   //   //     title='video'
//   //   // />
//   //   // </div>
//   //   //     </div>
//   // );
//   return(
//   <>
//   {/* <FloatingLabel
//     controlId="floatingTextarea"
//     label="Comments"
//     className="mb-3"
//   >
//     <Form.Control as="textarea" placeholder="Leave a comment here" />
//   </FloatingLabel> */}
//   <FloatingLabel controlId="floatingTextarea2" label="Commentsss">
//     <Form.Control
//       as="textarea"
//       placeholder="Leave a comment here"
//       style={{ height: '100px' }}
//     />
//   </FloatingLabel>
// </>)
// };

// export default App;

// // import React from 'react'

// // const App = () => {
// //   return (
// //     <div>
// //       <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
// //         frameborder='0'
// //         allow='autoplay; encrypted-media'
// //         allowfullscreen
// //         title='video'
// // />
// //     </div>
// //   )
// // }

// // export default App

// // import { useState, useEffect } from 'react';
// // import Button from '@material-ui/core/Button';
// // import Box from '@material-ui/core/Box';

// // const App = () => {
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [imageUrl, setImageUrl] = useState(null);

// //   useEffect(() => {
// //     if (selectedImage) {
// //       setImageUrl(URL.createObjectURL(selectedImage));
// //     }
// //   }, [selectedImage]);

// //   return (
// //     <>
// //       <input
// //         accept="image/*"
// //         type="file"
// //         id="select-image"
// //         style={{ display: 'none' }}
// //         onChange={e => setSelectedImage(e.target.files[0])}
// //       />
// //       <label htmlFor="select-image">
// //         <Button variant="contained" color="primary" component="span">
// //           Upload Image
// //         </Button>
// //       </label>
// //       {imageUrl && selectedImage && (
// //         <Box mt={2} textAlign="center">
// //           <div>Image Preview:</div>
// //           <img src={imageUrl} alt={selectedImage.name} height="100px" />
// //         </Box>
// //       )}
// //     </>
// //   );
// // };

// // export default App;

// // import logo from "./logo.svg";
// // import "./App.css";
// // import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";
// // import Navbar from "./Components/Navbar";
// // import About from "./Components/About";
// // import Home from "./Components/Home";
// // import Footer from "./Components/Footer";
// // function App() {
// //   return (
// //     <div className="page-container">
// //       <div className="content-wrap">
// //         <BrowserRouter>
// //           <Navbar />
// //           <Routes>
// //             <Route path="home" element={<Home />} />
// //             <Route path="about" element={<About />} />

// //             {/* <Route exact path="/home">
// //             <Home />
// //           </Route>

// //           <Route exact path="/about">
// //             <About />
// //           </Route> */}
// //           </Routes>
// //         </BrowserRouter>
// //         <Footer />
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
