import data1 from "../assets/data1.webp";
import data2 from "../assets/data3.jpg";
import main1 from "../assets/main1.jpg";
import main2 from "../assets/main2.jpg";
import web1 from "../assets/web1.jpg";
import web3 from "../assets/web3.jpg";
import des1 from "../assets/des1.webp";
import des2 from "../assets/des2.jpg";
import bill1 from "../assets/bill1.jpg";
import bill2 from "../assets/bill2.jpg";
import ind1 from "../assets/ind1.webp";
import ind2 from "../assets/ind2.jpg";
import mac1 from '../assets/mac1.jpg';
import mac2 from '../assets/mac2.jpg';
import fan1 from '../assets/fan1.jpg';
import fan2 from '../assets/fan2.jpg';
import qra1 from '../assets/qra1.jpg';
import qra2 from '../assets/qra2.jpeg';
import "./CareerStyles.css";
import CareerData from "./CareerData";


const Career = () => {
    return (
        <div className="career">
            <h1>Popular Jobs On Engineering</h1>
            <p>Every job is an opportunity to learn, to grow, and to become a better version of yourself.</p>

            <CareerData
                className="first-des-reverse"
                heading="Ui/Ux Designer - Infosys, Mumbai"
                text="Responsibilities include conducting user research, wireframing, prototyping, and conducting usability tests. Stay updated with design trends, accessibility guidelines, and industry best practices. UI/UX designers possess a blend of creativity and analytical skills, ensuring their designs enhance user satisfaction, engagement, and overall product success. Cross-functional teams to understand user needs and design intuitive interfaces. "
                apply="Apply Now"
                img1={des1}
                img2={des2}
            />
            <CareerData
                className="first-des"
                heading="Web Developer - Huwei LTD, Delhi"
                text="Collaborate with clients or project teams to understand website requirements and design visually appealing, responsive, and user-friendly interfaces. Web developers ensure website functionality, performance, and cross-device compatibility, utilizing backend languages like Python, PHP, or Ruby to build dynamic features and integrate databases and APIs."
                apply="Apply Now"
                img1={web3}
                img2={web1}
            />
            <CareerData
                className="first-des-reverse"
                heading="Data Analyst - accenture, Pune"
                text=" Collect, clean, and organize data, employing statistical techniques and data visualization tools to identify patterns and trends. Data Analysts create reports and dashboards to communicate findings to stakeholders, enabling them to make informed business decisions. Collaborate with teams across the organization to define data requirements and maintain data integrity. "
                apply="Apply Now"
                img1={data1}
                img2={data2}
            />
            <CareerData
                className="first-des"
                heading="Maintenance Engineer - Semence, Indore"
                text="An electrical maintenance engineer is responsible for ensuring the smooth functioning of electrical systems and equipment. Their role involves conducting regular inspections, troubleshooting issues, and performing repairs or replacements when necessary. They must adhere to safety guidelines, maintain records, and collaborate with teams to optimize electrical performance."
                apply="Apply Now"
                img1={main1}
                img2={main2}
            />
            <CareerData
                className="first-des-reverse"
                heading="Billing Engineer - ABN Interarch PVT, Pune"
                text="Candidate must have B.E./B. Tech In Civil Engineering to qualify as a billing engineer. He/she must know estimation and costing, BBS (Bar Bending Schedule), Rate analysis, and Labor and machinery analysis which enables him to carry out billing works at different stages of construction with proper efficiency and accuracy."
                apply="Apply Now"
                img1={bill1}
                img2={bill2}
            />
            <CareerData
                className="first-des"
                heading="Civil Engineer - Indovance, Pune"
                text="Candidate must have B.E./B. Tech In Civil Engineering to qualify as a billing engineer. He/she must know estimation and costing, BBS (Bar Bending Schedule), Rate analysis, and Labor and machinery analysis which enables him to carry out billing works at different stages of construction with proper efficiency and accuracy."
                apply="Apply Now"
                img1={ind1}
                img2={ind2}
            />
            <CareerData
                className="first-des-reverse"
                heading="Mechanical engineer - Cyient Inc, Pune"
                text="Mechanical engineers design, develop, and test mechanical systems, equipment, and devices. They analyze problems, propose solutions, and oversee manufacturing processes. These professionals ensure products meet safety standards."
                apply="Apply Now"
                img1={mac1}
                img2={mac2}
            />
            <CareerData
                className="first-des"
                heading="Frontend Developer - binaryel, Pune"
                text="Frontend Developers skilled in HTML, CSS, and JavaScript, responsible for creating and implementing user interfaces. They collaborate with design teams, ensure cross-browser compatibility, and optimize websites for speed and responsiveness to deliver engaging user experiences."
                apply="Apply Now"
                img1={fan1}
                img2={fan2}
            />
            <CareerData
                className="first-des-reverse"
                heading="Backend Developer - Qrata, Pune"
                text="Backend Developers proficient in server-side programming languages like Python, Java, or Node.js. They design, build, and maintain databases, APIs, and server applications. Ensuring smooth data flow, security, and system scalability is vital to their role."
                apply="Apply Now"
                img1={qra1}
                img2={qra2}
            />
        </div>
    );
};

export default Career;


