import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';

const SignUp = () => {
    return (
        <div className="signup-wrapper">
            <h1>Sign Up</h1>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Confirm Password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default SignUp;