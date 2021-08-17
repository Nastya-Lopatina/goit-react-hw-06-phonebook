import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../redux/Contacts/contact-actions';


function Filter ({value,onChange}){
    return(
        <div>
           Поиск контактов по имени
           <input
           type = 'text'
           value ={value}
           onChange = {onChange}/>
        </div>
    )
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
    value: state.contacts.filter
});

const mapDispatchToProps = dispatch => ({
onChange: (e) => dispatch(actions.changeFilter(e.target.value))
});

export default connect(mapStateToProps,mapDispatchToProps)(Filter)