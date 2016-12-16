import {Row, Col, Table, Button} from 'react-bootstrap';
import React, {PropTypes} from 'react';

const LogVisitLogs = (props) => (
    <Row>
        <Col xs={12}>
            <h3>Visit Logs</h3>
            <Table bordered condensed>
                <thead>
                    <tr>
                        <th>Log</th>
                        <th>Status</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Date</th>
                        <th>Primary</th>
                        <th>Phone</th>
                        <th>Secondary</th>
                        <th>Phone</th>
                        <th>Campus</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {/*map rows, different component?*/}
                    <tr>
                        <td>
                            <Button block bsStyle="primary" bsSize="sm" bsClass="outline" >Log</Button>
                        </td>
                        <td>Status</td>
                        <td>Start</td>
                        <td>End</td>
                        <td>Date</td>
                        <td>Primary</td>
                        <td>Phone</td>
                        <td>Secondary</td>
                        <td>Phone</td>
                        <td>Campus</td>
                        <td>Company</td>
                    </tr>
                    {/* end map */}
                </tbody>
            </Table>
        </Col>
    </Row>
);

export default LogVisitLogs;
