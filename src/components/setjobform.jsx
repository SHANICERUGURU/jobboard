import React from "react";
import { useFormik } from "formik";
import app from "../firebaseconfig";
import { setJobFormSchema } from "./schema";
import { getDatabase,ref,set,push } from "firebase/database";
import NavBar from "./navbar";
const SetJobForm=()=>{
    const onSubmit=()=>{
        const db =getDatabase(app)
        const newDocRef=push(ref(db,"jobboard/uploadedjobs"))
        set(newDocRef,{
            jobtitle: values.jobtitle,
            companyname: values.companyname,
            jobdescription: values.jobdescription,
            companylogo:values.companylogo,
            minsalary: values.minsalary,
            maxsalary:values.maxsalary,
            typeofemployment: values.typeofemployment,
            location:values.location,
            requiredskillset:values.requiredskillset,
            workexperience:values.workexperience,
        }).then((resp) => {
            console.log(resp);
            alert("Data saved");
            setSubmitting(false)
          }).catch((err) => {
            console.log(err);
            setSubmitting(false)
            alert("Error")
          })
    }

    const { values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, errors, touched } = useFormik({
        initialValues: {
          jobtitle: "",
          companyname: "",
          jobdescription: "",
          companylogo:"",
          minsalary: "",
          maxsalary:"",
          typeofemployment: "",
          location:"",
          workexperience:"",
          requiredskillset:"",
        },
        validationSchema: setJobFormSchema,
        onSubmit
      })
    return(
        <>
       <NavBar/>
        <div className="form-area">
            <form class="row g-3" onSubmit={handleSubmit}>
                <h1>UPLOAD YOUR JOB!!</h1>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Job title</label>
                <input 
                type="text"
                 class="form-control" 
                 id="inputEmail4"
                 name="jobtitle"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.jobtitle}
                placeholder="jobtitle... "
                style={errors.jobtitle ? { borderColor: "#fc8181" } : {}} />
              {errors.jobtitle && touched.jobtitle ? <p className="error-message">{errors.jobtitle}</p> : ""}
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Company name</label>
                <input 
                type="text" 
                class="form-control"
                 id="inputPassword4"
                 name="companyname"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.companyname}
                 placeholder="companyname..."
                 style={errors.companyname ? { borderColor: "#fc8181" } : {}} />
              {errors.companyname && touched.companyname ? <p className="error-message">{errors.companyname}</p> : ""}
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">company logo</label>
                <input 
                type="text" 
                class="form-control" 
                id="inputAddress" 
                name="companylogo"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.companylogo}
                placeholder="companylogo..."
                style={errors.companylogo ? { borderColor: "#fc8181" } : {}} />
              {errors.companylogo && touched.companylogo ? <p className="error-message">{errors.companylogo}</p> : ""}
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label">Job description </label>
                <input 
                type="text" 
                class="form-control"
                id="inputAddress2"
                name="jobdescription"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.jobdescription}
                placeholder="jobdescription..."
                style={errors.jobdescription ? { borderColor: "#fc8181" } : {}} />
              {errors.jobdescription && touched.jobdescription ? <p className="error-message">{errors.jobdescription}</p> : ""}
                  <div class="col-12">
                <label for="inputPassword4" class="form-label">Minimum salary</label>
                <input 
                type="number" 
                class="form-control"
                 id="inputPassword4"
                 name="minsalary"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.minsalary}
                 placeholder="minsalary..."
                 style={errors.minsalary ? { borderColor: "#fc8181" } : {}} />
              {errors.minsalary && touched.minsalary ? <p className="error-message">{errors.minsalary}</p> : ""}
              </div>
              <div class="col-12">
                <label for="inputPassword4" class="form-label">Maximum salary</label>
                <input 
                type="number" 
                class="form-control"
                 id="inputPassword4"
                 name="maxsalary"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.maxsalary}
                 placeholder="maxsalary..."
                 style={errors.maxsalary ? { borderColor: "#fc8181" } : {}} />
              {errors.maxsalary && touched.maxsalary ? <p className="error-message">{errors.maxsalary}</p> : ""}
              </div>
              <div class="col-12">
                <label for="inputPassword4" class="form-label">Required skill set</label>
                <input 
                 type="text" 
                class="form-control"
                 id="inputPassword4"
                 name="requiredskillset"
                 onChange={handleChange}
                 onBlur={handleBlur}
                 value={values.requiredskillset}
                 placeholder="requiredskillset..."
                 style={errors.requiredskillset ? { borderColor: "#fc8181" } : {}} />
              {errors.requiredskillset && touched.requiredskillset ? <p className="error-message">{errors.requiredskillset}</p> : ""}
              </div>
              </div>
              <div class="col-md-6">
              <label for="inputState" class="form-label">type of employment</label>
                <select 
                id="inputState" 
                name="typeofemployment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.typeofemployment}
                class="form-select">
                  <option>Any</option>
                  <option>Part-time</option>
                  <option>Full-time</option>
                  </select>
              </div>
              <div class="col-md-4">
                <label for="inputState" class="form-label">Location</label>
                <select 
                id="inputState" 
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
                class="form-select"
                placeholder="location">
                <option>Nairobi</option>
                  <option>Kisumu</option>
                  <option>Mombasa</option>
                  <option>Eldoret</option>
                  <option>Nakuru</option>
                </select>
              </div>
              <div class="col-md-2">
              <label for="inputState" class="form-label">Work experience</label>
                <select 
                id="inputState"
                name="workexperience"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.workexperience}
                class="form-select">
                  <option>Any</option>
                  <option>Internship</option>
                  <option>Volunteering</option>
                  <option>Senior manager</option>
                  <option>Vocational courses</option>
                </select>
              </div>
              
              <div class="col-12">
                <button type="submit" class="btn btn-primary" disabled={isSubmitting}>Upload!!</button>
              </div>
            </form>
        </div>
 </>
    )
}
export default SetJobForm