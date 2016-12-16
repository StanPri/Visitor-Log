import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Grid} from 'react-bootstrap';
import SearchBox from '../common/SearchBox';
import LogVisitLogs from './Log-VisitLogs';
import LogVisitors from './Log-Visitors';
import * as logPageActions from '../../actions/logPageActions';



class LogPage extends React.Component {
  constructor(props) {
    super(props);
    

  }



  render() {
    return (
      <Grid fluid>
                <SearchBox/>
                <LogVisitLogs/>
                <LogVisitors/>
      </Grid>
    );
  }
}

  function mapStateToProps(state, ownProps) {
    return {
      items: state.items
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators(logPageActions, dispatch)
    };
  }

  LogPage.propTypes = {
    actions: PropTypes.object.isRequired
  };


export default connect(mapStateToProps, mapDispatchToProps)(LogPage);
