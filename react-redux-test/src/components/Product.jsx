import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Product = () => {
  const [products, getProduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((data) => data.json())
      .then((result) => getProduct(result));
  }, []);

  const Cards = products.map((product) => (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Products</h1>
      <div className="row">{Cards}</div>
    </div>
  );
};

export default Product;
