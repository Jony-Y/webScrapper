import React , {Component} from 'react';
import PropTypes from 'prop-types';
import Input from "../../components/inputs/Input";
import Form from "../../components/form/Form";
import Button from "../../components/buttons/Button";

class ScrapperForm extends Component {
    constructor(props){
        super(props);
        this.state = {url:'', query:''};
    }
    login = (e) => {
        this.props.onSubmit(this.state.url, this.state.query);
    };

    onInputChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };
    render(){
        const {url, query} = this.state;
        return (
            <Form className="flexbox-fill flex-xs-10" onSubmit={this.login}>
                <Input required={true} placeholder="https://google.com" name="url" type="url" value={url} className="sm" onChange={this.onInputChange}/>
                <Input required={true} placeholder="additional query e.g a[href]" name="query"  value={query} className="sm m-l-15 m-r-15" type="query" onChange={this.onInputChange}/>
                <Button type="submit" color="primary">Submit</Button>
            </Form>
        )
    }
}

ScrapperForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default ScrapperForm;