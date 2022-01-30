import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styles.css';

const Login = () => {
    return (
        <div className="login-wrapper">
            <h1>Login</h1>
            <Form>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Password" />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default Login;