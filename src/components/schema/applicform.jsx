import React, { useContext, } from "react";
import NavBar from "../navbar";
import { useFormik } from "formik";
import app from "../../firebaseconfig";
import { applicJobFormSchema } from ".";
import { getDatabase, ref, set, push } from "firebase/database";
import { UserContext } from "../../App";
import { useLocation } from "react-router-dom";
const ApplicForm = () => {
  const location=useLocation()
  const job=location.state
  const [user, setUser] = useContext(UserContext)
  const username = localStorage.getItem("username")
  console.log(username)
  const onSubmit = () => {
    const db = getDatabase(app)
    const newDocRef = push(ref(db, `jobboard/jobapplications/${username}`))
    set(newDocRef, {
      workexperience: values.workexperience,
      job:job
    }).then((resp) => {
      console.log(resp);
      alert("application completed")
    }).catch((err) => {
      console.log(err);
      alert("Error")
    })
  }
  const { values, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, errors, touched } = useFormik({
    initialValues: {
      workexperience: "",
      },
    validationSchema: applicJobFormSchema,
    onSubmit
  })
  return (
    <>
      <NavBar />
      <div className="form-area">
        <form class="row g-3" onSubmit={handleSubmit}>
          <h1>APPLICATION!!</h1>

          <div class="col-12">
            <label for="inputAddress2" class="form-label"> Relevant work experience</label>
            <textarea
              type="text"
              class="form-control"
              id="inputAddress2"
              name="workexperience"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.workexperience}
              placeholder="workexperience..."
              style={errors.workexperience ? { borderColor: "#fc8181" } : {}} ></textarea>
            {errors.workexperience && touched.workexperience ? <p className="error-message">{errors.workexperience}</p> : ""}

          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary" disabled={isSubmitting}>complete application!!</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default ApplicForm