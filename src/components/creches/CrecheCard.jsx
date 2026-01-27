"use client";

import PropTypes from "prop-types";
import { Card, CardContent, CardActions, Typography, Button, Box, Chip } from "@mui/material";
import { FaMapMarkerAlt, FaPhone, FaStar } from "react-icons/fa";

function CrecheCard({ id, name, location, phone, rating, capacity }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "start", mb: 1 }}>
          <Typography variant="h6" component="div" sx={{ fontWeight: "bold" }}>
            {name || "Creche Name"}
          </Typography>
          {rating && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#f9c22e" }}>
              <FaStar size={14} />
              <Typography variant="body2">{rating}</Typography>
            </Box>
          )}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, color: "text.secondary" }}>
          <FaMapMarkerAlt size={14} />
          <Typography variant="body2">{location || "Location TBD"}</Typography>
        </Box>

        {phone && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, color: "text.secondary" }}>
            <FaPhone size={14} />
            <Typography variant="body2">{phone}</Typography>
          </Box>
        )}

        {capacity && (
          <Box sx={{ mt: 2 }}>
            <Chip label={`Capacity: ${capacity}`} size="small" variant="outlined" sx={{ mr: 1 }} />
          </Box>
        )}
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          View Details
        </Button>
        <Button size="small" color="secondary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}

CrecheCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  phone: PropTypes.string,
  rating: PropTypes.number,
  capacity: PropTypes.number,
};

CrecheCard.defaultProps = {
  phone: null,
  rating: null,
  capacity: null,
};

export default CrecheCard;
