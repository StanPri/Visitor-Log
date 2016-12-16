import {Row, Col, Table, Button, Glyphicon} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const LogVisitors = (props) => (
    <Row>
        <Col xs={12}>
            <h3>Visitors - </h3>
            <Table bordered condensed>
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
                        <td>Name</td>
                        <td>Phone</td>
                        <td>BadgeType</td>
                        <td>BadgeNumber</td>
                        <td>ID</td>
                        <td>
                            <Button block bsStyle="default" bsSize="xs" bsClass="outline" ><Glyphicon glyph="briefcase"/></Button>
                        </td>
                        <td>
                            <Button block bsStyle="primary" bsSize="xs" bsClass="outline" ><Glyphicon glyph="time"/></Button>
                        </td>
                        <td>
                            <Button block bsStyle="success" bsSize="xs" bsClass="outline" ><Glyphicon glyph="log-in"/></Button>
                        </td>
                        <td>
                            <Button block bsStyle="warning" bsSize="xs" bsClass="outline" ><Glyphicon glyph="log-out"/></Button>
                        </td>
                        <td>
                            <Button block bsStyle="danger" bsSize="xs" bsClass="outline" ><Glyphicon glyph="remove"/></Button>
                        </td>
                    </tr>
                    {/* end map */}
                </tbody>
            </Table>
        </Col>
    </Row>
);

export default LogVisitors;
