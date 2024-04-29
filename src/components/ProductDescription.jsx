import './ProductDescription.css';

const ProductDescription = ({ name, description }) => {
  return (
    <div className="productDescription">
      <h1>{name}</h1>
      <p className="productDescription_txt">{description}</p>
      <div className="productDescription_CTA">
        <p>SEE DETAILS</p>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
    </div>
  );
};

export default ProductDescription;
