import "./MarketingStyles.css";
import {Link} from 'react-router-dom';
import MarketingData from './MarketingData';
import dig1 from '../../assets/dig1.jpg';
import dig2 from '../../assets/dig2.jpg';
import mark1 from '../../assets/mark1.png';
import mark2 from '../../assets/mark2.jpg';
import four1 from '../../assets/four1.png';
import four2 from '../../assets/four2.jpg';
import sale1 from '../../assets/sale1.webp';
import sale2 from '../../assets/sale2.jpg';


const Marketing = () => {
    return (
        <div className="marketing">
            <h1>Popular Jobs On Marketing</h1>
            <p>Every job is an opportunity to learn, to grow, and to become a better version of yourself.</p>

            <MarketingData
                className="first-des-reverse"
                heading="Digital Marketing - Coltene, Mumbai"
                text="A Digital Marketing Executive spearheads online marketing strategies to promote products or services. Oversee social media campaigns, email marketing, and website optimization. Analyzing data and performance metrics, refine strategies for maximum effectiveness. Collaborating with teams, create compelling content and manage digital advertising campaigns, aiming to boost brand visibility and drive engagement."
                apply="Apply Now"
                img1={dig1}
                img2={dig2}
            />
            <MarketingData
                className="first-des"
                heading="Marketing Generalist - Bifrost AI, India"
                text="Coordinate campaigns, manage social media, and assist in content creation. Conducting market research, they identify consumer trends and competitor insights. Their role involves supporting various marketing initiatives, fostering brand growth, and maintaining effective communication with stakeholders.."
                apply="Apply Now"
                img1={mark1}
                img2={mark2}
            />
            <MarketingData
                className="first-des-reverse"
                heading="Marketing Executive - Foursis, Aurangabad"
                text=" Marketing Executive plays a pivotal role in developing and executing marketing strategies. Conduct market research, identify target audiences, and oversee promotional activities. Collaborating with creative teams, Create compelling content and manage advertising campaigns. Aim is to increase brand visibility, drive sales, and achieve business objectives through effective marketing initiatives."
                apply="Apply Now"
                img1={four1}
                img2={four2}
            />
            <MarketingData
                className="first-des"
                heading="Sales Specialist - Plasma, Mumbai"
                text="Sales and Marketing Specialist is a dynamic professional who bridges the gap between sales and marketing teams. Analyze market trends, identify potential clients, and strategize sales techniques. Crafting marketing campaigns, generate leads, nurture client relationships, and track sales performance."
                apply="Apply Now"
                img1={sale2}
                img2={sale1}
            />
            <div className="morebtn">
                <Link to="/" className="brbtn">Browse More Jobs</Link>
            </div>
        </div>

    );
};

export default Marketing;


