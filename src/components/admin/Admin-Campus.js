import {Col, Table, Button, FormControl, Glyphicon} from 'react-bootstrap';
import React, {PropTypes} from 'react';

/* Almost exact same as AdminLocations, make common component and pass in title, etc as props? */
const AdminCampus = (props) => (
  <Col xs={12} md={6} className="left-cloumn">
    <h3>Campus</h3>
    <Table bordered condensed className="table-editable">
      <thead>
        <tr>
          <th className="col-xs-6">Name</th>
          <th className="col-xs-3">Active</th>
          <th className="col-xs-3" colSpan="2">
            <Button block bsStyle="primary" bsSize="sm" className="outline">Show Inactive</Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {/*map rows, different component?*/}
        <tr>
          <td>
            <FormControl type="text" placeholder="Enter Name" className="input-sm" value="Campus Name" disabled/>
          </td>
          <td>
            <Button block bsStyle="default" bsSize="sm" className="outline" disabled><Glyphicon glyph="ok"/></Button>
          </td>
          <td>
            <Button block bsStyle="primary" bsSize="sm" className="outline"><Glyphicon glyph="pencil"/></Button>
          </td>
          <td>
            <Button block bsStyle="danger" bsSize="sm" className="outline"><Glyphicon glyph="remove"/></Button>
          </td>
        </tr>
        {/* end map */}
        <tr>
          <td>
            <FormControl type="text" placeholder="Enter Name" className="input-sm"/>
          </td>
          <td>
            <Button block bsStyle="default" bsSize="sm" className="outline"><Glyphicon glyph="ok"/></Button>
          </td>
          <td colSpan="2">
            <Button block bsStyle="success" bsSize="sm" className="outline"><Glyphicon glyph="plus"/></Button>
          </td>
        </tr>
      </tbody>
    </Table>
  </Col>
);

export default AdminCampus;
