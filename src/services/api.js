import axios from 'axios';

const api = axios.create({
  baseURL: 'https://playground.barato.com.br/desafio-front/api',
});

const getOffer = id => {
  const response = api.get(`offer/${id}`);
  return response;
};

const categories = [];

const getAllOffers = async () => {
  const response = await api.get('/offers');
  const newArr = response.data.map(async offer => {
    const { data } = await getOffer(offer.id);

    if (!categories.includes(data.category)) {
      categories.push(data.category);
    }

    const { category } = data;
    const item = { ...offer, category };

    return item;
  });

  const data = await Promise.all(newArr);
  return { data, categories };
};

export { getAllOffers, getOffer };
