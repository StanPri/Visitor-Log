import React, {PropTypes} from 'react';
import {Button, Form, FormControl, FormGroup, InputGroup} from 'react-bootstrap';


const SearchBox = (props) => (
    <FormGroup className="has-feedback">
        <FormControl type="text" placeholder="Search" />
        <span className="glyphicon glyphicon-search form-control-feedback"/>
    </FormGroup>
);

export default SearchBox;
