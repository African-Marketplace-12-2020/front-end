import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function SignUp () {
    const [ fields, handleFieldChange ] = useFormFields({
        email: "",
        password: "",
        confirmPassword: "",
        confirmationCode: "",
    });
    const history = useHistory();
    const [ newUser, setNewUser ] = useState(null);
    const { userHasAuthenticated } = useAppContext();
    const [ isLoading, setIsLoading ] = useState(false);

    function validateForm() {
        return(
            fields.email.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
    }

    async function handleConfirmationSubmit(event) {
        event.preventDefault();

        setIsLoading(true);

        setNewUser("test");

        setIsLoading(false);
    }

    async function handleConfirmationSubmit(event){
        event.preventDefault();

        setIsLoading(true);
    }

    function renderConfirmationForm(){
        return(
            <Form onSubmit = {handleConfirmationSubmit}>
                <Form.Group controlId = "confirmationCode" size = "lg">
                    <Form.Label>Confirmation Code</Form.Label>
                    <Form.controlId
                    autoFocus
                    type = "tel"
                    onChange = {handleFieldChange}
                    value = {fields.confirmationCode}
                    />
                    <Form.Text muted>Please check your email for the code.</Form.Text>
                </Form.Group>
                <LoaderButton
                block
                size = "lg"
                type = "submit"
                variant = "success"
                isLoading = {isLoading}
                disabled = {!validateConfirmationForm()}
                >
                    Verify
                </LoaderButton>
            </Form>
        );
    }
    function renderForm(){
        return(
            <Form onSubmit = {handleSubmit}>
                <Form.Group controlId = "email" size = "lg">
                    <Form.Label>Email</Form.Label>
                    <Form.control
                    autoFocus
                    type = "email"
                    value = {fields.email}
                    onChange = {handleFieldChange}
                    />
                </Form.Group>
                <Form.Group controlId = "password" size = "lg">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.control
                    type = "password"
                    onChange = {handleFieldChange}
                    value = {fields.confirmPassword}
                    />
                </Form.Group>
                <LoaderButton
                block
                size = "lg"
                type = "submit"
                variant = "success"
                isLoading = {isLoading}
                disabled = {!validateForm()}
                >
                    Signup
                </LoaderButton>
            </Form>
        );
    }
    return(
        <div className = "Signup">
            {newUser === null ? renderForm() : renderConfirmationForm()}
        </div>
    );
}
