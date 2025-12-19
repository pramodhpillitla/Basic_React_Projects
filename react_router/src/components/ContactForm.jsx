export default function ContactForm(){
    return (
        <div>
            <input type="text" placeholder="Enter your name here" />
            <br />
            <input type="email" placeholder="Enter your email here" />
            <br />
            <textarea placeholder="Enter your address here"></textarea>
            <br />
            <button>Submit</button>
        </div>
    );
}