import { StaticImageData } from 'next/image';
import img1 from './img/icons/icon1.png';
import img2 from './img/icons/icon2.png';
import img3 from './img/icons/icon3.png';
import img4 from './img/icons/icon4.png';
import img5 from './img/icons/icon5.png';
import img6 from './img/icons/icon6.png';
import img7 from './img/icons/icon7.png';
import img8 from './img/icons/icon8.png';
import img9 from './img/icons/icon9.png';
import img10 from './img/icons/icon10.png';
import img11 from './img/icons/icon11.png';
import img12 from './img/icons/icon12.png';
import img13 from './img/icons/icon13.png';

import f1 from './img/foods/1.png';
import f2 from './img/foods/2.png';
import f3 from './img/foods/3.png';
import f4 from './img/foods/4.png';
import f5 from './img/foods/5.png';
import heart from './img/Like.png';

interface CategoryList {
  id: number;
  content: string;
  image: StaticImageData;
}

interface FoodList {
  id: number;
  image: StaticImageData;
  favourite?: StaticImageData;
  title: string;
  address: string;
  distance: number;
  status: string;
  oTime: string;
  cTime: string;
}

export const dataCategory: CategoryList[] = [
  // {
  //   id: 1,
  //   content: 'All',
  //   image: img1,
  // },
  {
    id: 2,
    content: 'Fast food',
    image: img2,
  },
  {
    id: 3,
    content: 'Take-away',
    image: img3,
  },
  {
    id: 4,
    content: 'Chinese food',
    image: img4,
  },
  {
    id: 5,
    content: 'Japanese food',
    image: img5,
  },
  {
    id: 6,
    content: 'Voucher',
    image: img6,
  },
  {
    id: 7,
    content: 'Vegetarian',
    image: img7,
  },
  {
    id: 8,
    content: 'Coffee',
    image: img8,
  },
  {
    id: 9,
    content: 'Pizza',
    image: img9,
  },
  {
    id: 10,
    content: 'Gift',
    image: img10,
  },
  {
    id: 11,
    content: 'Sweet',
    image: img11,
  },
  {
    id: 12,
    content: 'Milk',
    image: img12,
  },
  {
    id: 13,
    content: 'Freeship',
    image: img13,
  },
];

export const dataFood: FoodList[] = [
  {
    id: 1,
    image: f1,
    favourite: heart,
    title: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.6,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 2,
    image: f2,
    favourite: heart,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.3,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 3,
    image: f3,
    favourite: heart,
    title: 'Japan Ishushi honconoonnononno',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 1.3,
    status: 'Đang đóng cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 4,
    image: f4,
    title: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.6,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 5,
    image: f1,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 6,
    image: f5,
    favourite: heart,
    title: 'Japan Ishushi honconoonnononno',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.3,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 7,
    image: f1,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 8,
    image: f3,
    favourite: heart,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 9,
    image: f2,
    favourite: heart,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 10,
    image: f5,
    title: 'Peppo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 11,
    image: f1,
    title: 'Hanpo restaurant',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.7,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
  {
    id: 12,
    image: f4,
    favourite: heart,
    title: 'Japan Ishushi honconoonnononno',
    address: '12, Pham Ngoc Thach st, Dong Da dist, Ha Noi',
    distance: 0.3,
    status: 'Đang mở cửa',
    oTime: '08:30 - 10:30',
    cTime: '08:30 - 10:30',
  },
];
