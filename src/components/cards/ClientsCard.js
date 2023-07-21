import "./ClientsCardStyle.css";
import { Link } from 'react-router-dom';
import ClientsData from "./ClientsCardData";
import des1 from '../../assets/des1.webp';
import web3 from '../../assets/web3.jpg';
import data1 from '../../assets/data1.webp';
import main1 from '../../assets/main1.jpg';
import bill1 from '../../assets/bill1.jpg';
import ind1 from '../../assets/ind1.webp';
import dig1 from '../../assets/dig1.jpg';
import mark1 from '../../assets/mark1.png';
import sel1 from '../../assets/sale2.jpg';
import mac1 from '../../assets/mac1.jpg';
import fan1 from '../../assets/fan1.jpg';
import qra1 from '../../assets/qra1.jpg';


function Clients() {
    return (
        <div className="card">
            <h1>Job Listing</h1>
            <div className="jobcard">
                <ClientsData
                    image={des1}
                    heading="Ui/Ux Designer - Infosys, Mumbai"
                    text=" Skills required information architecture, wireframing, visual design, interaction design, usability testing, mobile responsiveness, web technologies, collaboration, problem-solving, aesthetics."
                />
                <ClientsData
                    image={data1}
                    heading="Data Analyst - accenture, Pune"
                    text="Data Analysts should possess expertise in data analysis, statistical tools (e.g., Excel, Python, R), data visualization, database querying, data cleaning, problem-solving, attention to detail, critical thinking."
                />
                <ClientsData
                    image={web3}
                    heading="Web Developer - Huwei LTD, Delhi"
                    text="Skills required front-end frameworks, back-end development, databases, version control, testing, responsive design, debugging, and staying updated with evolving web technologies for building dynamic."
                />
                <ClientsData
                    image={main1}
                    heading="Maintenance Engineer - Semence, Indore"
                    text="Electrical Maintenance Engineers need proficiency in electrical systems, troubleshooting, repair, maintenance practices, safety regulations, equipment inspection, problem-solving, technical documentation, teamwork."
                />
                <ClientsData
                    image={bill1}
                    heading="Billing Engineer - ABN Interarch PVT, Pune"
                    text="Billing Engineers require skills in quantity estimation, cost analysis, contract management, project documentation, understanding of construction codes and standards, software proficiency, attention to detail."
                />
                <ClientsData
                    image={ind1}
                    heading="Civil Engineer Specialist- Indovance, Pune"
                    text="Civil Engineers need expertise in structural analysis, design, project management, construction principles, surveying, AutoCAD, materials selection, budgeting, problem-solving, teamwork, communication."
                />
                <ClientsData
                    image={dig1}
                    heading="Digital Marketing - Coltene, Mumbai"
                    text="Digital Marketers must possess skills in SEO, SEM, content marketing, social media management, data analytics, email marketing, PPC advertising, branding, marketing automation, creativity, communication."
                />
                <ClientsData
                    image={mark1}
                    heading="Marketing Generalist - Bifrost AI, Ind"
                    text="Marketing Generalists should have skills in market research, data analysis, branding, advertising, content creation, event planning, digital marketing, communication, project management."
                />
                <ClientsData
                    image={sel1}
                    heading="Sales Specialist - Plasma, Mumbai"
                    text="Sales Specialists require skills in prospecting, lead generation, relationship building, negotiation, product knowledge, sales techniques, customer service, communication, CRM software."
                />
                <ClientsData
                    image={mac1}
                    heading="Mechanical engineer - Cyient, Pune"
                    text="Mechanical engineers possess expertise in CAD software, thermodynamics, fluid mechanics, and materials science. They excel in problem-solving, design, and analysis, with a keen eye for detail, project management."
                />
                <ClientsData
                    image={fan1}
                    heading="Frontend Developer - binaryel, Pune"
                    text="Frontend developers are proficient in HTML, CSS, JavaScript, and popular frameworks like React or Angular. They possess UI/UX design knowledge, responsive web development skills, cross-browser compatibility expertise."
                />
                <ClientsData
                    image={qra1}
                    heading="Backend Developer - Qrata, Pune"
                    text="Backend developers excel in server-side programming languages like Python, Java, or Node.js. They possess strong database management skills, API development expertise, security implementation knowledge."
                />

                <div className="morebtn">
                    <Link className="brbtn">Browse More Jobs</Link>
                </div>
            </div>
        </div>
    );
}
export default Clients;