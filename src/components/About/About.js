import './styles.css'
import { Card, CardImg, CardText, CardBody, 
CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div>
                <h1 className="about-h1">Articles</h1>
            </div>
            <div>
                <Card className="card">
                    <CardImg className="card-image" src="https://www.moneyunder30.com/wp-content/uploads/2018/05/2_how-to-invest-648x364-c-default.jpg" alt="article 1" />
                    <CardBody>
                        <CardTitle>7 Easy Ways To Start Investing With Little Money</CardTitle>
                        <CardSubtitle>Written by David Weliver</CardSubtitle>
                        <CardText>Read this article that summarizes how one can invest on a budget!</CardText>
                        <a href="https://www.moneyunder30.com/start-investing-with-little-money"><Button className="card-button">Open article</Button></a>
                    </CardBody>
                </Card>
            </div>
        </div>
    )
}

export default About;