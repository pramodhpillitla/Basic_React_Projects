import { useNavigate } from "react-router-dom";

export default function Contact(){
    const navi = useNavigate();
    return(
        <div>
            <h1>Contact us Page</h1>
            <div className="contact-buttons">
                <button onClick={()=>navi('info')}>Contact Info </button>
                <button onClick={()=>navi('form')}>Contact Form </button>
            </div>
        </div>
    )
}