import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import { Layout, Box, Card, Loading } from '../../components';
import * as api from '../../services/api';

const Home = () => {
  const [allOffers, setAllOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAll() {
      const data = await api.getAllOffers();
      setAllOffers(data);
      setLoading(i => !i);
    }
    getAll();
  }, []);

  return (
    <S.HomeContainer>
      <Layout>
        {loading ? (
          <Loading type="pacman" />
        ) : (
          <>
            <h1>Hotéis</h1>
            <Box>
              {allOffers.map(
                offer =>
                  offer.category === 'Hotéis' && (
                    <Card
                      key={offer.id}
                      imgSrc={offer.image.url}
                      title={offer.title}
                      description="descrição..."
                      price={offer.price}
                    >
                      <Link to="/offer/23186">{offer.title}</Link>
                    </Card>
                  )
              )}
            </Box>
          </>
        )}
      </Layout>
    </S.HomeContainer>
  );
};

export default Home;
