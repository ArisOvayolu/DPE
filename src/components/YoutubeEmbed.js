import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div
    style={{
      display: "flex",
      height:'650px',
      width:'100%',
      padding:'10px',
    }}
  >
    <iframe
      style={{ margin: "auto", marginTop:'10px', marginBottom:'10px' }}
      width="45%"
      height="65%"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
