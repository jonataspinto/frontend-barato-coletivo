import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import {
  Layout,
  Box,
  Card,
} from '../../components';
import * as api from '../../services/api';

const Home = () => {
  const [allOffers, setAllOffers] = useState([]);

  const getAll = async () => {
    const data = await api.getAllOffers();
    console.log(data);
    setAllOffers(data);
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <S.HomeContainer>
      <Layout>
        <h1>Hotéis</h1>
        <Box>
          {allOffers.map((offer) => (
            (offer.category === 'Hotéis') && (
            <Card key={offer.id}>
              <Link to="/offer/23186">{offer.title}</Link>
            </Card>
            )
          ))}
        </Box>
      </Layout>
    </S.HomeContainer>
  );
};

export default Home;
