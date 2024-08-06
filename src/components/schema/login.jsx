import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import { loginSchema } from ".";
import NavBar from "../navbar";
import app from "../../firebaseconfig";
import { getDatabase, get, ref } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const Login = () => {
    const navigate = useNavigate()
    const [user, setUser] = useContext(UserContext);
    
    const onSubmit = async () => {
        const db = getDatabase(app)
        const dbRef = ref(db, `jobboard/users/${values.username}`)
        const snapshot = await get(dbRef)
        if (snapshot.exists()) {
            let userArray = Object.values(snapshot.val())
            console.log(userArray);
            if (userArray[0].password == values.password) {
                alert("Successful login")
                setUser({
                    username: userArray[0].username,
                    isAuthenticated: true
                })

                localStorage.setItem("username", userArray[0].username)
               
                navigate("/home")
            } else {
                alert("User not found")
                setSubmitting(false)
            }
            setSubmitting(false)
        } else {
            alert("User not found")
            setSubmitting(false)
        }

    }
    const { values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, setSubmitting, touched } = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit
    })
    return (
        <>
            <NavBar />
            <div className="signupform" style={{padding:'2rem'}}>
                <div className="container signupform">
                    <br />
                    <br />
                    <br />
                    <div className="form-area col-md-7">
                        <h3>LOGIN</h3>
                        <form onSubmit={handleSubmit}  style={{padding:'2rem'}}>
                            <div className="form-group">
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
                            <div className="form-group">
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
                            <br />
                            <button disabled={isSubmitting} className="btn btn-info" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;