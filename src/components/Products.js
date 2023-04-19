import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Placeholder } from "react-bootstrap";

export default function Products() {
  const [products, setProduct] = useState([]);
  const fetchProduct = () => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container">
      {products.map((product) => (
        <Card className="d-inline-flex m-3" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.images} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button variant="primary">Click View</Button>
          </Card.Body>
        </Card>
      ))}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}
