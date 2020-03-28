import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './Style';
import { Card, Loading, Image, Button } from '../../components/elements';
import { Box } from '../../components';
import * as api from '../../services/api';

const style = {
  title: {
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

const Home = () => {
  const [allOffers, setAllOffers] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAll() {
      const { data, categories } = await api.getAllOffers();
      setAllOffers(data);
      setAllCategory(categories);
      setLoading(i => !i);
    }
    getAll();
  }, []);

  const HomeSection = (title, price) => (
    <span style={{ display: 'block', padding: '10px' }}>
      <p style={style.title}>{title}</p>
      <p>R${price}</p>
    </span>
  );

  const RenderBoxers = () =>
    allCategory.map(category => (
      <Box category={category} key={category}>
        {allOffers.map(
          offer =>
            offer.category === category && (
              <Card
                key={offer.id}
                title={offer.title}
                description="descrição..."
                price={offer.price}
              >
                <Image imgSrc={offer.image.url} alt={offer.id} width={250} />
                {HomeSection(offer.title, offer.price)}
                <Link to={`/offer/${offer.id}`}>
                  <Button value="Ver Mais" handleClick={() => {}} />
                </Link>
              </Card>
            )
        )}
      </Box>
    ));

  return (
    <S.HomeContainer>
      {loading ? <Loading type="pacman" /> : RenderBoxers()}
    </S.HomeContainer>
  );
};

export default Home;
