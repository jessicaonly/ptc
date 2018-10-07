import React from 'react';

const Form = props => (
  <form onSubmit={props.getBusiness} style={{ marginBottom:"2rem" }}>
    <input className="form__input" type="text" name="businessName" />
    <input className="form2_input" type="text" name="userLocation" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;