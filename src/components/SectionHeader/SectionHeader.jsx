import React from "react";
import PropTypes from "prop-types";

function SectionHeader({
  headerName,
  leftPosition,
  rightPosition,
  topLeft,
  topRight,
}) {
  const leftStyle = {
    left: leftPosition,
    top: topLeft,
  };

  const rightStyle = {
    right: rightPosition,
    top: topRight,
  };

  return (
    <React.Fragment>
      <section className="section_wrapper">
        <div className="section_header_left" style={leftStyle}></div>
        <div className="section_header_right" style={rightStyle}></div>
        <div className="section_header_content">
          {headerName}
        </div>
      </section>
    </React.Fragment>
  );
}

SectionHeader.propTypes = {
  headerName: PropTypes.string.isRequired,
  leftPosition: PropTypes.string,
  rightPosition: PropTypes.string,
  topLeft: PropTypes.string,
  topRight: PropTypes.string,
};

SectionHeader.defaultProps = {
  leftPosition: "29.5rem",
  rightPosition: "29.5rem",
  topLeft: "2.5rem",
  topRight: "5rem",
};

// <SectionHeader
//         headerName="About Us"
//       />
export default SectionHeader;
