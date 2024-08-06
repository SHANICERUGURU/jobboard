import React, { useState, useEffect } from "react";
import NavBar from "../navbar";
import MyJobsCard from "./myjobscard";
import { getDatabase, ref, get } from "firebase/database";
import app from "../../firebaseconfig";

const MyJobs = () => {
    const [jobs, setJobs] = useState([])
    const username = localStorage.getItem("username")
    useEffect(() => {
        async function getData() {
            const db = getDatabase(app)
            const dbRef = ref(db, `jobboard/jobapplications/${username}`);
            const snapshot = await get(dbRef);
            if (snapshot.exists()) {
                let data = Object.values(snapshot.val())
                setJobs(data)
                console.log(data);
            }
        }
        getData()
    }, [])
    return (
        <>
            <NavBar />
            <h1>{username}'s job applications!!</h1>
            <div className="containerwrap" style={{ padding: '2rem' }}>
                {
                    jobs.map((job, index) => {
                        return (
                            <div class="container" key={index}>
                              <MyJobsCard jobs={job.job} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default MyJobs