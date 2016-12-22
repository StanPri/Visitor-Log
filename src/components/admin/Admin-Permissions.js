import {
  Row,
  Col,
  Table,
  Button,
  FormControl,
  Glyphicon
} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const AdminPermissions = (props) => (
  <Row>
    <Col xs={12}>
      <h3>Permissions</h3>
      <Table bordered condensed className="table-editable">
        <thead>
          <tr>
            <th className="col-xs-4">Name</th>
            <th className="col-xs-3">Role</th>
            <th className="col-xs-3">Active</th>
            <th className="col-xs-2" colSpan="2">
              <Button block bsStyle="primary" bsSize="sm" className="outline">Show Inactive</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/*map rows, different component? -> remove 'disabled' if editing */}
          <tr>
            <td>
              <FormControl type="text" placeholder="Enter Name" className="input-sm" value="Full Name" disabled/>
            </td>
            <td>
              <FormControl componentClass="select" className="input-sm" value="1" disabled>
                {/* cahnge value above to value selected is row.Role */}
                <option value="">Select Role</option>
                <option value="1">Security</option>
                <option value="2">Admin</option>
                <option value="3">Super Admin</option>
                <option value="4">Super Duper Admin</option>
              </FormControl>
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
              <FormControl componentClass="select" className="input-sm">
                <option value="">Select Role</option>
                <option value="1">Security</option>
                <option value="2">Admin</option>
                <option value="3">Super Admin</option>
                <option value="4">Super Duper Admin</option>
              </FormControl>
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
  </Row>
);

export default AdminPermissions;
