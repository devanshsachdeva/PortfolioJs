import React from 'react'
import EduknowItem from '../../Components/EduknowItem/EduknowItem'
import NavigationBar from '../../Components/NavigationBar/NavigationBar'
import FooterLayout from '../FooterLayout/FooterLayout'
import './Eduknow.css'

export default function Eduknow() {
    return (
        <div className='edu-container'>
            <div className='edu-title'>
                <h1>
                    My TimeLine
                </h1>
            </div>
            <div className='timeline-container'>
                <EduknowItem desc="Class X" desct="Mother Divine Public School, CBSE" date="2013 - 2014" tag="Education" color="#018f69" url="http://www.motherdivineschool.com/" text="Mother Divine Public School" />
                <EduknowItem desc="Class X" desct="Talent Search Examination" date="2013 - 2014" tag="External Examination" color="#3ca5f0" url="https://ncert.nic.in/national-talent-examination.php" text="NTSE" />
                <EduknowItem desc="Class XII (Non-Medical)" desct="Mother Divine Public School, CBSE" date="2015 - 2016" tag="Education" color="#018f69" url="https://www.cbse.gov.in/" text="C.B.S.E." />
                <EduknowItem desc="B.tech - Computer Science" desct="JIMS - EMTEC (GGSIP University), Noida" date="08/2016 - 10/2020" tag="Education" color="#018f69" url="https://www.cbse.gov.in/" text="GGSIP University" />
                <EduknowItem desc="Payroll Management Project" desct="Core Java, CCVS" date="05/2016 - 07/2016" tag="Certification" color="#f5a442" url="https://www.facebook.com/CCVS-computer-Education-240217026441084/" text="CCVS" />
                <EduknowItem desc="Hardware-Networking Trainee" desct="BPTP Ltd, Delhi" date="12/2016 - 01/2017" tag="Internship" color="#f03c54" url="https://www.bptp.com/" text="BPTP Ltd" />
                <EduknowItem desc="Android Development Workshop" desct="Coding Ninjas, Delhi" date="01/2017 - 01/2017" tag="Certification" color="#f5a442" url="https://www.codingninjas.com/" text="Coding Ninjas" />
                <EduknowItem desc="Android Application Development" desct="Bptp Ltd, Delhi" date="06/2017 - 08/2017" tag="Internship" color="#f03c54" url="https://www.bptp.com/" text="BPTP Ltd" />
                <EduknowItem desc="Web Development" desct="Airport Authority Of India, Delhi" date="06/2018 - 07/2018" tag="Internship" color="#f03c54" url="https://www.aai.aero/" text="Airport Authority of India" />
                <EduknowItem desc="Cyber Security Analyst" desct="Hackershala, Noida" date="05/2019 - 07/2019" tag="Internship" color="#f03c54" url="https://hackershala.com/" text="Hackershala" />
                <EduknowItem desc="Python" desct="Udemy, Expiration : None" date="04/2020 - 05/2020" tag="Certification" color="#f03c54" url="https://www.udemy.com/certificate/UC-c6c5b9e9-94b2-4075-b5a4-25a0b3b67b90/" text="View Certification" />
                <EduknowItem desc="SQL" desct="Udemy, Expiration : None" date="05/2020 - 06/2020" tag="Certification" color="#f03c54" url="https://www.udemy.com/certificate/UC-769ddaf5-3b66-4d98-95d3-c403726da1cd/" text="View Certification" />
                <EduknowItem desc="Tableau - Dasboard Creation" desct="Udemy, Expiration : None" date="06/2020 - 07/2020" tag="Certification" color="#f03c54" url="https://www.udemy.com/certificate/UC-4bfaf037-2b48-4225-b03d-ac01f1cb0625/" text="View Certification" />
                <EduknowItem desc="Business Intelligence Analyst" desct="Udemy, Expiration : None" date="04/2020 - 07/2020" tag="Certification" color="#f03c54" url="https://www.udemy.com/course/the-business-intelligence-analyst-course-2018/" text="View Certification" />
                <EduknowItem desc="Full Stack Web Application Developer" desct="Trainee, Infosys" date="01/2021 - 06/2021" tag="Work Experience" color="#813cf0" url="https://www.infosys.com/" text="Infosys" />
                <EduknowItem desc="Cyber Security Analyst" desct="Infosys Client : The Capital Group, US" date="06/2021 - 10/2021" tag="Work Experience" color="#813cf0" url="https://www.capitalgroup.com/" text="The Capital Group" />
                <EduknowItem desc="IAM Analyst - Wealth Management" desct="Infosys Client : Morgan Stanley" date="10/2021 - present" tag="Work Experience" color="#813cf0" url="https://www.morganstanley.com/" text="Morgan Stanley" />
                <EduknowItem desc="Site Reliablity Engineer" desct="Coursera, Expiration : None" date="11/2021 - 12/2021" tag="Certification" color="#f03c54" url="https://www.coursera.org/account/accomplishments/verify/K9TUEWVU945Q" text="View Certification" />

            </div>
        </div>
    )
}