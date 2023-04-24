import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";


const Write = () => {

  const [rubric, setRubric] = useState({
      
      rubric_title: '',
      question_number: '',
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      option5: '',
    
  });
  const [err, setError] = useState(null);
  const navigate = useNavigate()

  const handleChange = (e) => {
    setRubric((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/posts/write", rubric);
      navigate("/");
    } catch (err) { 
      setError(err.response.data);
      console.log("It is the hundleSubmit from Write => "+ err)
    }
  };

  return (
  <div>
    <div className="rtitle"><h1>Create Rubric </h1></div>
    <div className="question">    
    <div className="sub"> 
    <label htmlFor="">Please Enter The Rubric Title </label>
    <input onChange={handleChange} type="text" placeholder="rubric_title"    name="rubric_title"/>
    
           </div>
  
  
    <div className="question">
     <span>1</span>
     <label htmlFor="">Please enter Question Number </label>
    <input   onChange={handleChange} type="Number" placeholder="Quesion Number" name="question_number"/>

  <label htmlFor="">Please enter the criteria</label>
    <input   onChange={handleChange} type="text" placeholder="question"    name="question" />
   
    <label htmlFor="">Please enter the option with that worth 5 points </label>
    <input   onChange={handleChange} type="text" placeholder="option one"    name="option1"/>

    <label htmlFor="">Please enter the option with that worth 4 points </label>
    <input   onChange={handleChange} type="text" placeholder="option two"    name="option2"/>

    <label htmlFor="">Please enter the option with that worth 3 points </label>
    <input   onChange={handleChange} type="text" placeholder="option three"    name="option3" />

    <label htmlFor="">Please enter the option with that worth 2 points</label>
    <input   onChange={handleChange} type="text" placeholder="option four"    name="option4"/>

    <label htmlFor="">Please enter the option with that worth 1 points </label>
    <input   onChange={handleChange} type="text" placeholder="option five"    name="option5"/>

     </div>

     <div className="question">
     <span>2</span>

     <label htmlFor="">Please enter the criteria</label>
    <input   onChange={handleChange} type="text" placeholder="question"    name="question" />
   
    <label htmlFor="">Please enter the option with that worth 5 points </label>
    <input   onChange={handleChange} type="text" placeholder="option one"    name="option_one"/>
    <label htmlFor="">Please enter the option with that worth 4 points </label>
    <input   onChange={handleChange} type="text" placeholder="option two"    name="option_two"/>
    <label htmlFor="">Please enter the option with that worth 3 points </label>
    <input   onChange={handleChange} type="text" placeholder="option three"    name="option_three" />
    <label htmlFor="">Please enter the option with that worth 2 points</label>
    <input   onChange={handleChange} type="text" placeholder="option four"    name="option_four"/>
    <label htmlFor="">Please enter the option with that worth 1 points </label>
    <input   onChange={handleChange} type="text" placeholder="option five"    name="option_five"/>
  
     </div> 
      <div className="question">
      
     <span>3</span>

     <label htmlFor="">Please enter the criteria</label>
    <input   onChange={handleChange} type="text" placeholder="question"    name="question" />
   
    <label htmlFor="">Please enter the option with that worth 5 points </label>
    <input   onChange={handleChange} type="text" placeholder="option one"    name="option_one"/>
    <label htmlFor="">Please enter the option with that worth 4 points </label>
    <input   onChange={handleChange} type="text" placeholder="option two"    name="option_two"/>
    <label htmlFor="">Please enter the option with that worth 3 points </label>
    <input   onChange={handleChange} type="text" placeholder="option three"    name="option_three" />
    <label htmlFor="">Please enter the option with that worth 2 points</label>
    <input   onChange={handleChange} type="text" placeholder="option four"    name="option_four"/>
    <label htmlFor="">Please enter the option with that worth 1 points </label>
    <input   onChange={handleChange} type="text" placeholder="option five"    name="option_five"/>
   
     </div> 
      <div className="question">
     <span>4</span>

     <label htmlFor="">Please enter the criteria</label>
    <input   onChange={handleChange} type="text" placeholder="question"    name="question" />
   
    <label htmlFor="">Please enter the option with that worth 5 points </label>
    <input   onChange={handleChange} type="text" placeholder="option one"    name="option_one"/>
    <label htmlFor="">Please enter the option with that worth 4 points </label>
    <input   onChange={handleChange} type="text" placeholder="option two"    name="option_two"/>
    <label htmlFor="">Please enter the option with that worth 3 points </label>
    <input   onChange={handleChange} type="text" placeholder="option three"    name="option_three" />
    <label htmlFor="">Please enter the option with that worth 2 points</label>
    <input   onChange={handleChange} type="text" placeholder="option four"    name="option_four"/>
    <label htmlFor="">Please enter the option with that worth 1 points </label>
    <input   onChange={handleChange} type="text" placeholder="option five"    name="option_five"/>
  
     </div> *
     
     <div className="question">
     <span>5</span>
     <label htmlFor="question">Please enter the criteria</label>
    <input   onChange={handleChange} type="text" placeholder="question"    name="question" />
   
    <label htmlFor="">Please enter the option with that worth 5 points </label>
    <input   onChange={handleChange} type="text" placeholder="option one"    name="option_one"/>

    <label htmlFor="">Please enter the option with that worth 4 points </label>
    <input   onChange={handleChange} type="text" placeholder="option two"    name="option_two"/>
    <label htmlFor="">Please enter the option with that worth 3 points </label>
    <input   onChange={handleChange} type="text" placeholder="option three"    name="option_three" />
    <label htmlFor="">Please enter the option with that worth 2 points</label>
    <input   onChange={handleChange} type="text" placeholder="option four"    name="option_four"/>
    <label htmlFor="">Please enter the option with that worth 1 points </label>
    <input   onChange={handleChange} type="text" placeholder="option five"    name="option_five"/>
   
     </div> 

      <button  class="button-72" role="button" >Add Question</button>
            </div>
     <button  class="button-72" role="button" onClick={handleSubmit}>Save</button>
            </div>
  );
};

export default Write;
