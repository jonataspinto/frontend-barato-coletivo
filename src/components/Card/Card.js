import React from 'react';
import PropTypes from 'prop-types';
import * as S from './CardStyled';

const Card = ({ imgSrc, title, description, price }) => (
  <S.CardContainer>
    <S.Image src={imgSrc} />
    <span style={{ padding: '10px' }}>
      <p className="title" style={{ padding: '0 0 10px 0' }}>
        {title}
      </p>
      <p>{description}</p>
      <p>R${price}</p>
    </span>
    <button type="button">Button</button>
  </S.CardContainer>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Card;
