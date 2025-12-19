import { useNavigate } from "react-router-dom"

export default function NotFound(){
    const navigate = useNavigate();
    return (
        <div>
            <h2>404 Page Not Found</h2>
            <br />
            <button onClick={()=>navigate('/')}>Go To Home</button>
        </div>
    )
}