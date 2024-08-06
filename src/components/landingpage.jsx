import React from "react";
import { Link } from "react-router-dom";
const LandingPage=()=>{
    return(
        <>
        <body className="landing">     
            <div >
                <h1>Job Seekers' Paradise</h1>
                    <p>Welcome to our job board, where opportunities await you at every click.
                        Whether you're embarking on a new career path or seeking to advance in your current field,
                        our platform is designed to connect you with meaningful opportunities that align with your ambitions and talents.
                        From entry-level positions to executive roles, explore a diverse range of job listings tailored to your skills and aspirations.
                        We are committed to supporting your career journey by providing a user-friendly experience and empowering you to take the next step towards your professional goals.
                        Start exploring and discover your path to success with us today!</p>
                <div className="button">
                    <Link to={'/signup'} type="button" class="linkbutton">Here's a glimpse of our jobs!!</Link>
                    </div>
            </div>
            </body>
        </>
    )
}
export default LandingPage