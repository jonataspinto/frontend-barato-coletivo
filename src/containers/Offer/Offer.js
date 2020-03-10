import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as S from './OfferStyled';
import { Layout } from '../../components';

const Offer = () => {
  const { id } = useParams();
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(window.location);
    console.log(id);
    console.log(pathname.split('/')[1].split('/')[0]);
  }, [id, pathname]);

  return (
    <S.OfferContainer>
      <Layout>Offer works!</Layout>
    </S.OfferContainer>
  );
};

export default Offer;
