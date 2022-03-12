import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> ,
  document.getElementById('root')
);

 // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';

const page = (
    <div>
    <img scr= "./react-logo.png" width = "40px"></img>
    <h1>Fun facts about NG</h1>
    <ul>
    <li>fact 1</li>
    <li>fact 2</li>
    <li>fact 3</li>
    <li>fact 4</li>
    </ul>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))
*/

// import React from "react"
// import ReactDOM from "react-dom"

function Page() {
    return (
        <div className="jobAdContainer" >
            <div className="flex-cont">
                <div>
                <div id="jobTitleDiv" className="titleColor">
                <h1>Software Developer</h1>
                </div>
                <div id="workTypeDiv">Work Type : Full Time</div>
                <div id="locationDiv">Location : QLD</div>
                <div id="residencyDiv">resident required</div>
                <div id="bulletDiv">
                    <ul className="templatebullet">
                        <li>Delivering quality software efficiently</li>
                        <li>Permanent full-time opportunity</li>
                        <li>Toowong location</li>
                    </ul>
                    </div>
                </div>
                <div className= "companyImage">
                </div>
            </div>

                <div className="templatetext">
                    <p className="pPadding">This job ad is the universe’s way of telling you that you’re currently in the wrong job!</p>
                    <p className="pPadding">Part of the Auto &amp; General Group of companies, Compare the Market, yep, the one with the Meerkats, is a high growth FinTech company on a transformational journey that is focused on designing, building, and delivering the very best energy, insurance, health and home loan comparison and fulfilment product solutions in Australia. Okay, in the world!</p>
                    <p className="pPadding">We are currently looking for that one person that believes opportunities don’t just happen, you create them. That one person that cares passionately about the customer, absolutely believes that the strength of a high-performance team is each individual member, and that the strength of each member is the reason for a high-performance team.</p>

                    <h5 className={"headings"}>The Role</h5>
                    <p className="pPadding">We are looking for a Software Developer whose key to success will be their enthusiasm, curiosity, knowledge of cloud platforms, and their ability to work collaboratively with others.</p>
                        <p className="pPadding">The focus will be on delivering quality software efficiently for both internal and external stakeholders.&nbsp; As a development professional you are driven and passionate about quality, design, re-usability, maintainability and can take responsibility in delivering a development assignment across an enterprise-scale application landscape.</p>
                    <p className="pPadding">Compare the Market is redeveloping its core platform using the latest technologies and using this to underpin all our service offerings including Energy, Insurance and Lending, so there will be scope to work on a range of projects covering our whole business.</p>

                    <h5 className={"headings"}>Skills &amp; Experience</h5>

                    <ul className="img_bullet">
                        <li>Experience in the full lifecycle of application development.</li>
                        <li>Ability to take on new challenges, and learn new skills and platforms.</li>
                        <li>Development experience with any of the following: <b className="languageHighlight">Java, Go, TypeScript, .NET, React</b></li>
                        <li>Desire to seek innovative solutions to provide the best outcomes for our customers</li>
                        <li>Experience with Jira/Confluence desirable.</li>
                    </ul>

                    <p>
                        <h5 className={"headings_2"}>What we enjoy at Compare the Market.</h5>

                        We love working with great people who want to work with other great people on things that matter. People who have integrity and a strong desire to work with people with different perspectives, ideas, and opinions.
                        Besides getting to work with some really awesome fun-loving overachievers dedicated to leading, supporting, mentoring, challenging, and learning with you, day-to-day, you’ll also get to enjoy:
                    </p>
                    <ul>
                        <li>Access to training and development opportunities</li>
                        <li>Study support (up to 50% of tuition fees for relevant courses) and professional membership reimbursement</li>
                        <li>Convenient location - less than 4km from the CBD - close to shops, bus stops, the Toowong train station, cycleways, river walks and street parking</li>
                        <li>Additional leave days - ‘ME’ leave and ‘Volunteer Day’ leave</li>
                        <li>Excellent social and community activities including annual celebrations, family fun days and many regular events across each of our sites.</li>
                        <li>Employee discounts available on Car, Home and Travel insurance.</li>
                        <li>Discounts with a broad range of providers, including gym memberships, accommodation, dental care and more.&nbsp;</li>
                        <li>Income protection insurance provided to support you in the event of non-work related illness or injury.</li>
                        <li>Not to mention - you’ll be an integral member of the Meerkat Crew.</li>
                    </ul>

                    <p>
                        Intrigued? Don't limit yourself. Apply now to take control of your career. It’ll be the best career decision you’ve ever made!
                        <h5 className={"headings_2"}> Compare the Market welcome and value diversity in the workplace.</h5>
                        <p className="pColor" ><u>*A note from Compare the Market to recruitment agencies:</u>
                        We politely ask that you avoid making any approaches or sending any unsolicited resumes to our Recruitment Team or Hiring Leaders across our business. Compare the Market is not responsible for any fees related to unsolicited resumes.</p>
                    </p>
                    </div>

        </div>

    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
