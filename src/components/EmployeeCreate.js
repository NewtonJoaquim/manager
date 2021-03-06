import React from 'react';
import {View} from 'react-native'
import {connect} from 'react-redux'

import {employeeUpdate, employeeCreate} from '../actions'
import {Card, CardSection, Button} from './common'
import EmployeeForm from './EmployeeForm';

class EmployeeCreateForm extends React.Component{
    onButtonPress(){
        const {name, phone, shift} = this.props;
        this.props.employeeCreate({name, phone, shift:shift || 'Monday'});
    }

    render(){
        return(
            <View>
                <Card>
                    <EmployeeForm {...this.props}/>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Create
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift}
}

export default connect(mapStateToProps,{employeeUpdate, employeeCreate})(EmployeeCreateForm);