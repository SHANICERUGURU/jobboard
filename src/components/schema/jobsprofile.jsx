import React from "react";
import NavBar from "../navbar";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const JobsProfile = () => {
  const location = useLocation()
  const jobs = location.state
  console.log(jobs);
  return (
    <>
      <NavBar />
      <div className="jobsprofile">
        <div class="card mb-3 jobcard" style={{ maxWidth: '540rem' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={jobs.companylogo} class="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">TITLE: {jobs.jobtitle}</h5>
                <h6 class="card-text">COMPANY: {jobs.companyname}</h6>
                <p class="card-text"><small class="text-body-secondary">SALARY RANGE:{jobs.minsalary}-{jobs.maxsalary}</small></p>
                <p><b>Description:</b>{jobs.jobdescription}</p>
                <p><b>Required skills:</b>{jobs.requiredskillset}</p>
                <p><b>Type of employment:</b>{jobs.typeofemployment}</p>
                <p><b>Location:</b>{jobs.location}</p>
                <p><b>Work experience:</b>{jobs.workexperience}</p>
                <Link to='/applicform' state={jobs} class="btn btn-secondary"> APPLY NOW!!</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default JobsProfile