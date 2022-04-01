import { useState, useEffect } from "react";

const Addproduct =()=>{
      const initialValues = { fullname: "", email: "",phone:"" ,msg:"" };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.fullname) {
          errors.fullname = "Productname is required!";
        }
        if (!values.msg) {
          errors.msg = "Description is required!";
        }
       
        return errors;
      };
    

    return(
        <>
        <div className="my-4">
            <h1 className="text-center mt-5"> Add Product</h1>
        </div>
        <div className ="container contact_div">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success text-success ">Product is added successfully</div>
      ) : ""}
            <div className="row">
                <div className ="col-md-6 col-10 mx-auto">
                <form onSubmit={handleSubmit}>
                     <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label ">Product Name</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="exampleFormControlInput1"
                     name="fullname"
                     value={formValues.fullname}
              onChange={handleChange}
                         placeholder="Enter your Name"
                    />
                      </div>
                      <p style={{color:"red"}}>{formErrors.fullname}</p>
             
                   
                    
               



                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                 name="msg"
                 value={formValues.msg}
              onChange={handleChange}></textarea>
                </div> 
                <p style={{color:"red"}}>{formErrors.msg}</p>


                <div className="col-12">
                <button className="btn btn-outline-primary mb-5" type="submit">Submit form</button>
                </div>
                       

                    </form>
                </div>
            </div>
        </div>
        </>

    )
}
export default  Addproduct;