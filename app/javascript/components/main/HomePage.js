import React from "react"
import PropTypes from "prop-types"
class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greet: {this.props.greet}
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  greet: PropTypes.string
};
export default HomePage
