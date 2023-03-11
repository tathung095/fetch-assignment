import images from 'images';

const products = [
  {
    topic: 'Petrol',
    items: [
      {
        title: '15 Coins',
        image: images.petrol1,
        desciption: '50% discount for every $100 top-up on your Shell Petrol Card',
      },
      {
        title: '1,000 Coins',
        image: images.petrol2,
        desciption: '70% discount top-up on your Shell Petrol Card',
        insuff: true,
      },
    ],
  },
  {
    topic: 'Rental Rebate',
    items: [
      {
        title: '20 Coins',
        image: images.rental1,
        desciption: 'Get $20 Rental rebate',
      },
      {
        title: '15 Coins',
        image: images.rental2,
        desciption: 'Get $500 Rental rebate',
      },
    ],
  },
  {
    topic: 'Food and Beverage',
    items: [
      {
        title: '25 Coins',
        image: images.food1,
        desciption: 'NTUC Fairprice $50 Voucher',
      },
      {
        title: '5 Coins',
        image: images.food2,
        desciption: 'Free Cold Stone Sundae at any flavour!',
      },
    ],
  },
];
export { products };
