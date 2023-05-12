type CalculationNewPrice = (price: number, discount: number) => number;

const calculationNewPrice: CalculationNewPrice = (price, discount) => {
  return discount ? price - (price * discount) / 100 : price;
};

export default calculationNewPrice;
