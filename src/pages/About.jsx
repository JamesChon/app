import { useState } from 'react'
import "./About.css";

function About() {
    const [contactVisible, setContactVisible] = useState(false);

    function showData() {
        console.log('button clicked!');
        setContactVisible(true);
    }



    return (
        <div className="about page">
            <h3>James Chon</h3>



            {contactVisible ?
                <div className="box">
                    <p>Have any questions? Just write us an email and we'll sort it out for you <b>fruitbasket@sdgku.edu</b>
                    </p>
                </div>
                : null}

            <button onClick={showData} className="btn btn-outline-dark"> View Contact Info</button>
        </div>
    );
}

export default About;