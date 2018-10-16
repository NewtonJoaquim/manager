import React from 'react';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions'
import {Card, CardSection, Input, Button} from './common';


class LoginForm extends React.Component{
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }

    onButtonPressed(){
        const {email,password} = this.props
        this.props.loginUser({email, password})
    }

    render(){
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                
                <CardSection>
                    <Button onPress={this.onButtonPressed.bind(this)}>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return{
        email:state.auth.email,
        password:state.auth.password
    }
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);