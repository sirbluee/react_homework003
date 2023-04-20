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
  console.log(products.length);
  useEffect(() => {
    fetchProduct();
  }, []);

  // loop placeholder
  let placeholder = [];
  for (let i = 0; i < 225; i++) {
    placeholder.push(
      <Card className="d-inline-flex m-3" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.dribbble.com/users/897154/screenshots/3763556/media/772c32922786c7173644fb7173563ea1.gif"
        />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />
            <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
    );
  }
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

      {/* Placeholder */}
      {placeholder}
    </div>
  );
}
