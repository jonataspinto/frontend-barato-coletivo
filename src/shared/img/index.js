import {
  faChartPie,
  faBars,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';

const ICONS = {
  chartPie: faChartPie,
  menu: faBars,
  shoppingCart: faShoppingCart,
};

const IMAGES = {
  brandLogo: 'https://www.baratocoletivo.com.br/img/logo-bc-2018.png?_v=1020',
};

const getImage = image => IMAGES[image];

const getIcon = iconName => ICONS[iconName];

export { getImage, getIcon };
