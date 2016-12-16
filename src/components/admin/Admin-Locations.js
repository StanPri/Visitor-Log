import {Col, Table, Button, FormControl, Glyphicon} from 'react-bootstrap';
import React, {PropTypes} from 'react';

/* Almost exact same as AdminCampus, make common component and pass in title, etc as props? */
const AdminLocations = (props) => (
    <Col xs={12} md={6} className="right-cloumn">
        <h3>Locations</h3>
        <Table bordered condensed className="editable-table">
            <thead>
                <tr>
                    <th className="col-xs-6">Name</th>
                    <th className="col-xs-3">Active</th>
                    <th className="col-xs-3" colSpan="2">
                        <Button block bsStyle="primary" bsSize="sm" bsClass="outline" >Show Inactive</Button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {/*map rows, different component?*/}
                <tr>
                    <td>
                        <FormControl type="text" placeholder="Enter Name" className="input-sm" />
                    </td>
                    <td>
                        <Button block bsStyle="default" bsSize="sm" bsClass="outline" ><Glyphicon glyph="ok"/></Button>
                    </td>
                    <td>
                        <Button block bsStyle="primary" bsSize="sm" bsClass="outline" ><Glyphicon glyph="penicl"/></Button>
                    </td>
                    <td>
                        <Button block bsStyle="danger" bsSize="sm" bsClass="outline"><Glyphicon glyph="remove"/></Button>
                    </td>
                </tr>
                {/* end map */}
                <tr>
                    <td>
                        <FormControl type="text" placeholder="Enter Name" className="input-sm"/>
                    </td>
                    <td>
                        <Button block bsStyle="default" bsSize="sm" bsClass="outline" ><Glyphicon glyph="ok"/></Button>
                    </td>
                    <td colSpan="2">
                        <Button block bsStyle="success" bsSize="sm" bsClass="outline" ><Glyphicon glyph="plus"/></Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    </Col>
);

export default AdminLocations;
