import * as React from "react";
import "./ProductCard.css";
import { Card, Row, Badge } from "react-bootstrap";

const ProductCard = ({ productCardData }) => {
  const {proOfferText, subtitleData, price, imageUrl, rating, name } = productCardData;
  console.log('productCardData', productCardData)
  return (
    <>
      <Card className="product-card">
        <Card.Img className="image-container" variant="top" src={imageUrl} />
        <Card.Body className="product-card-details">
          <Card.Title>
            <div className="product-card-title">
              <h5>{name.substring(0, 20)}</h5>
              <h5>
                <Badge bg="primary">{rating?.rating_text}</Badge>
              </h5>
            </div>
          </Card.Title>
          <Card.Text>
            <div className="product-card-subtitle">
              <p>{subtitleData?.locality?.text?.substring(0, 15)}</p>
              <p className="food-cost">{proOfferText}</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default ProductCard;
