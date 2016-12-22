import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const AdminNav = (props) => (
  <Row>
    <Col md={3} mdOffset={0}>
      <ButtonGroup>
        <Button bsStyle="primary" bsSize="sm">Locations</Button>
        <Button bsStyle="primary" bsSize="sm">Permissions</Button>
      </ButtonGroup>
    </Col>
  </Row>
);

export default AdminNav;
