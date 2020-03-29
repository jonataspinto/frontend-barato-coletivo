import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as S from './OfferStyled';

const Offer = () => {
  const { offer } = useSelector(store => store.data);
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(window.location);
    console.log(offer);
    console.log(pathname.split('/')[1].split('/')[0]);
  }, [id, pathname, offer]);

  return <S.OfferContainer>Offer works!</S.OfferContainer>;
};

export default Offer;
