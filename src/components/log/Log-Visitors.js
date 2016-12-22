import {
  Row,
  Col,
  Table,
  Button,
  Glyphicon,
  FormControl
} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const LogVisitors = (props) => (
  <Row>
    <Col xs={12}>
      <h3>Visitors -
      </h3>
      <Table bordered condensed className="table-editable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Badge Type</th>
            <th>Badge #</th>
            <th>ID</th>
            <th className="col-xs-1">Equipment</th>
            <th className="col-xs-1">History</th>
            <th className="col-xs-1">In</th>
            <th className="col-xs-1">Out</th>
            <th className="col-xs-1">Cancel</th>
          </tr>
        </thead>
        <tbody>
          {/*map rows, different component?*/}
          <tr>
            <td><FormControl type="text" placeholder="Name" className="input-sm" value="Name" disabled/></td>
            <td><FormControl type="text" placeholder="Phone" className="input-sm" value="Phone" disabled/></td>
            <td><FormControl type="text" placeholder="Badge Type" className="input-sm" value="Badge Type" disabled/></td>
            <td><FormControl type="text" placeholder="Badge Number" className="input-sm"/></td>
            <td><FormControl type="text" placeholder="ID Number" className="input-sm"/></td>
            <td>
              <Button block bsStyle="default" bsSize="sm" className="outline"><Glyphicon glyph="briefcase"/></Button>
            </td>
            <td>
              <Button block bsStyle="primary" bsSize="sm" className="outline"><Glyphicon glyph="time"/></Button>
            </td>
            <td>
              <Button block bsStyle="success" bsSize="sm" className="outline"><Glyphicon glyph="log-in"/></Button>
            </td>
            <td>
              <Button block bsStyle="warning" bsSize="sm" className="outline"><Glyphicon glyph="log-out"/></Button>
            </td>
            <td>
              <Button block bsStyle="danger" bsSize="sm" className="outline"><Glyphicon glyph="remove"/></Button>
            </td>
          </tr>
          {/* end map */}
        </tbody>
      </Table>
    </Col>
  </Row>
);

export default LogVisitors;
