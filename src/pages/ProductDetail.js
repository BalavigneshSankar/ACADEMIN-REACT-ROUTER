import { useParams, Link } from "react-router-dom";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = params.id;

  return (
    <>
      <h1>Product details</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetailPage;
