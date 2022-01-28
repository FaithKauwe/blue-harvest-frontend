import PropTypes from "prop-types";
import "./headerItem.css";

const HeaderItem = ({ headerName, index }) => {
  return <th key={index}>{headerName}</th>;
};

export default HeaderItem;
