import './styles.css';
import logo from '../../images/morereact.jpeg';
import image1 from '../../images/fieto2.jpeg';
import image2 from '../../images/fieto3.jpeg';
import image3 from '../../images/fieto5.jpeg';

const Home = () => {
    return (
        <div>
            <div className="home-box">
                <img className="home-img" src={logo} alt="picture of atom" />
            </div>
            <div className="home-box-2">
                <h1>Fieto</h1>
                <h4>Welcome to Fieto! Fieto is an application designed to bring a localized help center for people to easily access and learn about investments. Data for everyone, not just the priveleged.</h4>
                <button className="home-box-button">Sign Up</button>
                <h2 className="home-h2">Resources</h2>
            </div>
            <div className="home-image-box">
                <div className="home-image-box-part">
                    <img src={image1} alt="investments 1"/>
                    <li>Resources showing transparent information</li>
                    <li>Links to relevant and present time articles</li>
                    <li>Tips and tricks for making money on a budget</li>
                </div>
                <div className="home-image-box-part"> 
                    <img src={image2} alt="investments 2"/>
                    <li>Create a free account to view additional resources</li>
                    <li>Subscribe to our blog providing the latest highlights on cryptocurrency and blockchain</li>
                </div>
                <div className="home-image-box-part">
                    <img src={image3} alt="investments 3"/>
                    <li>Coming soon... View your stocks and make purchases with your account</li>
                    <li>Coming soon... add your friends and view each other's stock profiles</li>
                </div>
            </div>
        </div>
    )
}

export default Home;