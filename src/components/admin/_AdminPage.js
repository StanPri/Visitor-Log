import {Grid, Row} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import AdminPermissions from './Admin-Permissions';
import AdminCampus from './Admin-Campus';
import AdminLocations from './Admin-Locations';

class AdminPage extends React.Component {
    // ... constructor etc
    render() {
        let selected_page = null;
        let boolean = 0;
        //permission button pressed
        if (boolean) {
            selected_page = <AdminPermissions/>;
        } else {
            selected_page = (
                <Row>
                    <AdminCampus/>
                    <AdminLocations/>
                </Row>
            );
        }
        return (
            <Grid fluid>
                {selected_page}
            </Grid>
        );
    }
}

export default AdminPage;
