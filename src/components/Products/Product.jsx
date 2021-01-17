import { ProductDiv } from "./style";

const Product = ({ data }) => {
  const { image_url, product_name, id, variants } = data;

  const prices = variants.map((item) => +item.price).sort();

  const lowestPrice = Math.round(prices[0]);
  const highestPrice = Math.round(prices[prices.length - 1]);

  return (
    <ProductDiv className="d-flex justify-content-start align-items-center mb-5">
      <div className="lef">
        <img src={image_url} className="rounded" alt={product_name} />
      </div>
      <div className="right ms-2 align-self-start">
        <p className="text-muted small-text">{id}</p>
        <p className="fw-bold">{product_name}</p>
        <p className="text-muted small-text">{variants.length} Variants</p>
        <p className="text-muted">
          Rs {lowestPrice} - Rs {highestPrice}
        </p>
      </div>
    </ProductDiv>
  );
};

export default Product;
