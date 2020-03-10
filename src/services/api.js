import axios from 'axios';

const api = axios.create({
  baseURL: 'https://playground.barato.com.br/desafio-front/api',
});

const getOffer = id => {
  const response = api.get(`offer/${id}`);
  return response;
};

const getAllOffers = async () => {
  const response = await api.get('/offers');
  const newArr = response.data.map(async offer => {
    const { data } = await getOffer(offer.id);
    const { category } = data;
    const item = { ...offer, category };
    return item;
  });

  return Promise.all(newArr);
};

export { getAllOffers, getOffer };
