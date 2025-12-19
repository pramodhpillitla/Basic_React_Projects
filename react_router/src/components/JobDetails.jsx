import React from 'react';
import { useParams } from 'react-router-dom';
export default function JobDetails(){

    const {id} = useParams();
    return(
        <div>
            <h1>Job Details Page</h1>
        </div>
    )
}