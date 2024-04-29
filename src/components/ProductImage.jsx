const ProductImage = ({ imageSrc }) => {
  return (
    <img
      style={{ height: '100%', width: '100%', objectFit: 'contain' }}
      src={imageSrc}
      alt="shoe"
    />
  );
};

export default ProductImage;
