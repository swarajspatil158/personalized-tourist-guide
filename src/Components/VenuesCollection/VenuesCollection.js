import React from "react";
import PropTypes from "prop-types";
import Venue from "../Venue";
import { CardColumns } from "reactstrap";

import "./VenuesCollection.css";

const VenuesCollection = ({ venues }) => {
  return (
    <CardColumns className="card-list">
      {venues.map((venue) => {
        // console.log(venue.fsq_id)
        return <Venue data={venue} key={venue.fsq_id} />;
      })}
    </CardColumns>
  );
};

VenuesCollection.propTypes = {
  venues: PropTypes.array.isRequired,
};
export default VenuesCollection;
