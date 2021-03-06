import React from "react";
import PropTypes from "prop-types";

import { Alert } from "reactstrap";

const Error = ({ error }) => {
  return <Alert color="danger">{error} ... please try again )</Alert>;
};

Error.propTypes = {
  error: PropTypes.object.isRequired,
};
export default Error;
