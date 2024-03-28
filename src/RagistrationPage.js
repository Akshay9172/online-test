import React, { useState } from 'react'
import Appbody from './Appbody'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function RagistrationPage() { 
  const [data,setData] = useState({
    name:"",
    mobileNo:"",
    email:"",
    qualification:"",
    gender:"",
    date:""
  });
  const onClickSubmit=(()=>{
   axios
   .post("https://64d11c59ff953154bb79fead.mockapi.io/exam",data)
   .then((res)=>{
    setData(res.data);
    console.log(res.data)
    
   })
   .catch((error)=>console.log(error));
    navigate("/test-instructions")
    console.log(data);
    
})
const navigate= useNavigate();

  return (
    <Appbody
      content={

        <div class="container mt-3">

          <h2 className='z1'><b>Ragistration Form </b></h2>
          <form action="/action_page.php">
            <div className='row'>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                 <div className='img-sec'></div>
              </div>
              <div className='col-lg-6 col-sm-12 col-md-6'>
                <div class="mb-3 mt-3">
                  <label for="Name">Name:</label>
                  <input type="text" class="form-control" id="full-name" placeholder="Enter Name" name="Name"
                  onChange={(e)=> setData({...data,name:e.target.value})} />
                  <span id='nameval'></span>
                </div>
                <div class="mb-3 mt-3">
                  <label for="nomber">Mobile No:</label>
                  <input type="nomber" class="form-control" id="nomber" placeholder="Enter Mobile No." name="nomber" 
                  onChange={(e)=> setData({...data,mobileNo:e.target.value})}/>
                </div>
                <div class="mb-3 mt-3">
                  <label for="email">Email:</label>
                  <div class="input-group">

                    <input type="text" class="form-control" id='email' placeholder="Your Email"
                    onChange={(e)=> setData({...data,email:e.target.value})} />
                    <span class="input-group-text">@gmail.com</span>
                  </div>
                </div>
                <div class="mb-3 mt-3">
                  <label for="Name">Qualification:</label>
                  <input type="text" class="form-control" id="Qualification" placeholder="Enter Qualification" name="Qualification"
                  onChange={(e)=> setData({...data,qualification:e.target.value})} />
                </div>

                <div class="mb-3 mt-3">
                  <label for="email">Gender:</label>
                </div>
                <div className='row'>


                  <div className='col-lg-2'>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="radio1" name="optradio" value="Male" 
                      onChange={(e)=>setData({...data,gender:e.target.value})} />
                      <label class="form-check-label" for="radio1">Male</label>
                    </div>
                  </div>
                  <div className='col-lg-2'>
                    <div class="form-check">
                      <input type="radio" class="form-check-input" id="radio2" name="optradio" value="Female" 
                       onChange={(e)=>setData({...data,gender:e.target.value})} />
                      <label class="form-check-label" for="radio2">Female</label>
                    </div>
                  </div>
                </div><br></br>


                <div class="mb-3 mt-3">
                  <label for="Date">Date :</label>
                </div>
                <div action="/action_page.php">
                  <input className='form-control' type="date" id="date" name="date"
                  onChange={(e)=>setData({...data,date:e.target.value})} />

                </div><br></br>
                <div className='d'>
                  <button type="submit" class="btn btn-primary d3 "
                    onClick={()=>onClickSubmit()}><b>Submit</b></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      }

    />
  )
}

export default RagistrationPage;
