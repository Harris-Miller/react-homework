import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'normalize.css/normalize.css';
import NavBar from '../components/nav-bar';
import NewUserButton from '../components/new-user-button';
import UserTable from '../components/user-table';
import EditDialog from '../components/edit-dialog';

export default props => (
  <MuiThemeProvider>
    <Container md>
      <Row>
        <Col>
          <NavBar />
        </Col>
      </Row>
      <Row>
        <Col>
          <NewUserButton {...props} />
          <UserTable {...props} />
        </Col>
      </Row>
      <EditDialog {...props} />
    </Container>
  </MuiThemeProvider>
);
