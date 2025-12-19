import { useLoaderData } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Jobs() {

    const jobsData = useLoaderData();

    return (
        <div>
            <h1>Jobs</h1>
            <p>Explore job opportunities and apply for your dream job.</p>
            <p>Stay tuned for the latest job openings!</p>
            <br />
            <div className="jobs-list">
                {jobsData.map((job) => {
                    return <Link>
                        <h4>{job.title}</h4>
                        <p>{job.location}</p>
                    </Link>
                }
                )}
            </div>
        </div>
    )
}
export const JobLoader = async () => {
    // const res = fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await fetch('http://localhost:5000/jobs');
    return res.json();
}
