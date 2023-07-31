import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../components/store/cartSlice";
import { getProducts } from "../components/store/productSlice/";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  // const [products, getProduct] = useState([]);
  useEffect(() => {
    //dispatch an action for fetchProdcuts
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products/")
    //   .then((data) => data.json())
    //   .then((result) => getProduct(result));
  }, []);

  const addToCart = (product) => {
    //dispatch an add action
    dispatch(add(product));
  };

  const Cards = products.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR: {product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ background: "white" }}>
          <Button
            variant="primary"
            onClick={() => addToCart(product)}
            style={{ padding: "5px", color: "#111111", fontFamily: "bold" }}
          >
            <Card.Img
              src="/src/assets/img/add.png"
              style={{ width: "20px", height: "20px" }}
            />
            Añadir al Carrito
          </Button>
        </Card.Footer>
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
