const getSingleProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await res.json();
  return products;
};

export default getSingleProduct;
