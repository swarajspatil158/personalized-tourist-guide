import React from "react";
import PropTypes from "prop-types";
import "./Venue.css";
import {
  Badge,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";

const openVenueMap = (data) => {
  return () =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURI(
        data.name
      )}%20${encodeURI(data.location.formatted_address)},%20${encodeURI(
        data.location.country
      )}`
    );
};

const categoryIcon = (data) => {
  if (data.categories[0] && data.categories[0].icon) {
    return `${data.categories[0].icon.prefix}64${data.categories[0].icon.suffix}`;
  }
};

const cardHeaderStyles = (data) => {
  return {
    backgroundImage: `url(${categoryIcon(data)})`,
  };
};
const Venue = ({ data }) => {
  return (
    <Card onClick={openVenueMap(data)}>
      <CardHeader style={cardHeaderStyles(data)}>
        {data.categories[0] && data.categories[0].name}
      </CardHeader>
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardText>{data.location.formatted_address}</CardText>
        <CardText>
          <Button color="btn btn-success">
            {data.distance} <Badge color="btn btn-success">meter</Badge>
          </Button>
        </CardText>
      </CardBody>
    </Card>
  );
};

Venue.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Venue;
