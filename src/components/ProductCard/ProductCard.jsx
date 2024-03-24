import * as React from "react";
import "./ProductCard.css";
import { Card, Row, Badge } from "react-bootstrap";

const ProductCard = ({ productCardData }) => {
  const { description, price, image, rating, title } = productCardData;
  return (
    <>
      <Card className="product-card">
        <Card.Img className="image-container" variant="top" src={image} />
        <Card.Body className="product-card-details">
          <Card.Title>
            <div className="product-card-title">
              <h5>{title.substring(0, 15)}</h5>
              <h5>
                <Badge bg="primary">{rating?.rate}</Badge>
              </h5>
            </div>
          </Card.Title>
          <Card.Text>
            <div className="product-card-subtitle">
              <p>{description.substring(0, 25)}</p>
              <p className="food-cost">{price}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductCard;
