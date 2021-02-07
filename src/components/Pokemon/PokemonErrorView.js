import React from "react";
// import PropTypes from 'prop-types';
import errorImage from "./cat-cry.jpg";

const PokemonErrorView = ({ message }) => {
  return (
    <div role="alert">
      <img src={errorImage} width="240" alt="sadcat" />
      <p>{message}</p>
    </div>
  );
};

// PokemonErrorView.propTypes = {

// };

export default PokemonErrorView;
