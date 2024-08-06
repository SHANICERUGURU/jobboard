import React, { useEffect, useState,useRef } from "react";
import NavBar from "../navbar";
import JobsCard from "./jobscard";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../firebaseconfig";
const JobsContainer = () => {
    const searchInputRef=useRef("")
        const [searchQuerry,setSearchQuery]=useState("")
    const [jobs, setJobs] = useState([])
    useEffect(() => {
           async function getData() {
            const db = getDatabase(app)
            const dbRef = ref(db, "jobboard/uploadedjobs");
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                let data = Object.values(snapshot.val())
                setJobs(data)
                console.log(data);
            }
        }
        getData()
    }, [])

    useEffect(()=>{
        if (searchInputRef.current) {
            searchInputRef.current.value="";
        }
    }, [])
    const filteredJobs=jobs.filter((jobss)=>
    jobss.jobtitle.toLowerCase().includes(searchQuerry.toLowerCase())
    )
    return (
        <>
            <div><NavBar/></div>
            <div style={{padding: '1rem'}}>
                <input className="inputbox"
                    type="text"
                    placeholder="Search jobs..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    ref={searchInputRef}
                />
            </div>
            <div className="containerwrap" style={{ padding: '2rem' }}>
                {
                    filteredJobs.length>0?(
                    filteredJobs.map((job, index) => {
                        return (
                            <div class="container" key={index}>
                                <JobsCard jobs={job} />
                            </div>
                        )
                    })
                ):(
                    <h1>No jobs found</h1>
                )
                }
            </div>
        </>
    )
}
export default JobsContainer