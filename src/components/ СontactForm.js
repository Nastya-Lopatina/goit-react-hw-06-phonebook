import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../styles/ContactForm..module.css';
import { connect } from 'react-redux';
import actions from '../redux/Contacts/contact-actions';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }

handleChange =(e) => {
    const {name,value} = e.target;
    this.setState({[name]: value,})
};

handleSubmit = (e) => {
    e.preventDefault();
    
    this.props.onSubmit(this.state);
    this.setState({name: '', number: ''});
};


render(){
    
    return (
        <form className={style.form} onSubmit = {this.handleSubmit}>
            <label className ={style.label}>
                Name
               <input
               className = {style.input }
                type = "text"
                name = "name"
                value = {this.state.name}
                onChange = {this.handleChange}
                />
            </label>
            <label className ={style.label}>
                Number
               <input
               className = {style.input }
                type = "text"
                name = "number"
                value = {this.state.number}
                onChange = {this.handleChange}
                />
            </label>
            <button className = {style.button} type="submit">
            Добавить контакт
          </button>
        </form>
    )
}

    }

    ContactForm.propTypes = {
        AddContact: PropTypes.func,
      };

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(actions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);