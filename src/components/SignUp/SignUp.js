import { Button, Form, FormGroup, Input } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    signupWrapper: {
        height: '800px',
        width: '400px',
        padding: '20px'
    },
    signupHeading: {
        marginBottom: '30px'
    }
}))

const SignUp = () => {
    const classes = useStyles();
    return (
        <div className={classes.signupWrapper}>
            <h1 className={classes.signupHeading}>Sign Up</h1>
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