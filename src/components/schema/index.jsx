import * as yup from "yup"
export const setJobFormSchema=yup.object().shape({
          jobtitle: yup.string("").required("Do not leave field empty") ,
          companyname: yup.string("").required("Do not leave field empty") ,
          jobdescription: yup.string("").required("Do not leave field empty") ,
          companylogo:yup.string("").required("Do not leave field empty") ,
          minsalary: yup.number("").required("Do not leave field empty") ,
          maxsalary: yup.number("").required("Do not leave field empty"),
          requiredskillset:yup.string("").required("Do not leave field empty") ,
          typeofemployment: "",
          location:"",
          workexperience:"",
})
export const applicJobFormSchema=yup.object().shape({
   
    workexperience:yup.string("").required("Do not leave field empty") ,
  

})
let passwordRegEx = /^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])(?=.*[A-Z])(?=.*[a-z]).+$/;
export const signInSchema=yup.object().shape({
    username: yup.string().required("Required").min(3, "Minimum 3 characters"),
    password: yup.string().min(8).matches(passwordRegEx, {message: "Invalid Password"}).required("Required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Must match Password").required("Required"),
    firstname:yup.string("").required("Do not leave field empty") ,
    lastname:yup.string("").required("Do not leave field empty") ,
    educationbackground:yup.string("").required("Do not leave field empty"),
    email:yup.string().email("").required("Do not leave field empty"),
})
export const loginSchema = yup.object().shape({
    username: yup.string().required("Required").min(3, "Minimum 3 characters"),
    password: yup.string().min(8).matches(passwordRegEx, {message: "Invalid Password"}).required("Required"),
})
