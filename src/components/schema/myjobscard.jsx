import React from "react";
import { Link } from "react-router-dom";
const MyJobsCard = ({ jobs }) => {

   
  return (
    <>
      <div class="card mb-3 jobcard" style={{ width: '1000px', height: '200px', paddingTop: '2rem' }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img src={jobs.companylogo} class="img-fluid rounded-start" alt="..." style={{ width: '500px', height: '150px' }} />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">TITLE: {jobs.jobtitle}</h5>
              <h6 class="card-text">COMPANY: {jobs.companyname}</h6>
              <p class="card-text"><small class="text-body-secondary">SALARY RANGE:{jobs.minsalary}-{jobs.maxsalary}</small></p>
              <div className="buttoncard">
                  <Link to='/jobsprofile' state={jobs} class="btn btn-secondary"> view more</Link>
                   {/* <button type="button" class="btn btn-danger">delete</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default MyJobsCard