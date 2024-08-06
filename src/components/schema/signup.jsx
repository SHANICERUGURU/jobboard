import React, { useState } from "react";
import { useFormik } from "formik";
import { signInSchema } from ".";
import NavBar from "../navbar";
import app from "../../firebaseconfig";
import { getDatabase, ref, set, push, get } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate()
    const userExists = async (username) => {
        const db = getDatabase(app)
        const dbRef = ref(db, `jobboard/users/${username}`)
        const snapshot = await get(dbRef)
        return snapshot.exists()
    }
    const onSubmit = async () => {
        let userIsPresent = await userExists(values.username)
        if (userIsPresent) {
            alert("Username already exists")
            setSubmitting(false)
            return;
        }
        const db = getDatabase(app)
        const newDocRef = push(ref(db, `jobboard/users/${values.username}`))
        set(newDocRef, values

        ).then((resp) => {
            console.log(resp);
            alert("Registration successful")
            setSubmitting(false)
            localStorage.setItem("username", values.username)
            navigate("/login")
            setSubmitting(false)
        }).catch((err) => {
            console.log(err);
            alert("Error")
        })
    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirmPassword: "",
            firstname: "",
            lastname: "",
            educationbackground: "",
            phonenumber:"",
            email:"",
        },
        validationSchema: signInSchema,
        onSubmit
    })
    return (
        <>
            <NavBar />
            <div className="signupform">
                <div className="container signupform">
                    <br />
                    <br />
                    <br />
                    <div className="form-area col-md-7">
                        <h3>REGISTER</h3>
                        <h4>Have an a account??</h4>
                        <Link to={'/login'} className="linkbutton">LOGIN!!</Link>
                        <form onSubmit={handleSubmit} className="row justify-content-around">
                            <div className=" col-md-6 form-group">
                                <label for="username">User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.username}
                                    placeholder="Username"
                                    style={errors.username && touched.username ? { borderColor: "#FC8181" } : {}}
                                />
                                {errors.username && touched.username ? <p className="error-message">{errors.username}</p> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">First name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputEmail4"
                                    name="firstname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.firstname}
                                    placeholder="firstname... "
                                    style={errors.firstname ? { borderColor: "#fc8181" } : {}} />
                                {errors.firstname && touched.firstname ? <p className="error-message">{errors.firstname}</p> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Last name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputPassword4"
                                    name="lastname"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.lastname}
                                    placeholder="lastname..."
                                    style={errors.lastname ? { borderColor: "#fc8181" } : {}} />
                                {errors.lastname && touched.lastname ? <p className="error-message">{errors.lastname}</p> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputAddress" class="form-label">Education background</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="inputAddress"
                                    name="educationbackground"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.educationbackground}
                                    placeholder="educationbackground..."
                                    style={errors.educationbackground ? { borderColor: "#fc8181" } : {}} />
                                {errors.educationbackground && touched.educationbackground ? <p className="error-message">{errors.educationbackground}</p> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Phone number</label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="inputPassword4"
                                    name="phonenumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.phonenumber}
                                    placeholder="phonenumber..."
                                    style={errors.phonenumber ? { borderColor: "#fc8181" } : {}} />
                                {errors.phonenumber && touched.phonenumber ? <p className="error-message">{errors.phonenumber}</p> : ""}
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="inputPassword4"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder="email..."
                                    style={errors.email ? { borderColor: "#fc8181" } : {}} />
                                {errors.email && touched.email ? <p className="error-message">{errors.email}</p> : ""}
                            </div>
                            <div className="form-group col-md-6">
                                <label for="password">Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={errors.password && touched.password ? { borderColor: "#FC8181" } : {}}
                                    placeholder="Password" />
                                {errors.password && touched.password ? <p className="error-message">{errors.password}</p> : ""}
                            </div>
                            <div className="form-group col-md-6">
                                <label for="confirmPassowrd">Confirm Password</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}
                                    style={errors.confirmPassword && touched.confirmPassword ? { borderColor: "#FC8181" } : {}}
                                    placeholder="Confirm Password" />
                                {errors.confirmPassword && touched.confirmPassword ? <p className="error-message">{errors.confirmPassword}</p> : ""}
                            </div>
                          
                            <div className="col-md-5">
                            <br/>
                                <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp;
