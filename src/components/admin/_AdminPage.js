import {Grid, Row} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import AdminPermissions from './Admin-Permissions';
import AdminCampus from './Admin-Campus';
import AdminLocations from './Admin-Locations';
import AdminNav from './Admin-Nav';

class AdminPage extends React.Component {
  // ... constructor etc
  render() {
    let permissions_page = 1;
    //permission button pressed
    let selected_page = permissions_page
      ? <AdminPermissions/>
      : (
        <Row>
          <AdminCampus/>
          <AdminLocations/>
        </Row>
      );
    return (
      <Grid fluid>
        <AdminNav/> {selected_page}
      </Grid>
    );
  }
}

export default AdminPage;
