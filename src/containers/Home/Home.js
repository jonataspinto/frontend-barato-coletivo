import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getAll, getUniqueOffer } from '../../store/offers/offers.actions';

import * as S from './Style';
import { Card, Loading, Image, Button } from '../../components/elements';
import { Box } from '../../components';

const style = {
  title: {
    maxWidth: '180px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
};

const Home = () => {
  const { offers, categories, loading } = useSelector(state => state.data);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getOffers() {
      dispatch(getAll());
    }
    if (offers.length <= 1) getOffers();
  }, [dispatch]);

  const HomeSection = (title, price) => (
    <span style={{ display: 'block', padding: '10px' }}>
      <p style={style.title}>{title}</p>
      <p>R${price}</p>
    </span>
  );

  const RenderBoxers = () =>
    categories.map(category => (
      <Box category={category} key={category}>
        {offers.map(
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
                  <Button
                    value="Ver Mais"
                    handleClick={() => dispatch(getUniqueOffer(offer.id))}
                  />
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
