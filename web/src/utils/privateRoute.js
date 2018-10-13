import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends React.PureComponent {
  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   // dispatch(me());
  // }

  render() {
    const { component: Component, isAuth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => (isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        ))
        }
      />
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({ isAuth: authReducer.isLoggedIn });

export default withRouter(connect(mapStateToProps)(PrivateRoute));
