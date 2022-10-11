import React, { Component } from "react";
// import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import newspaper from "../newspaper.jpg";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, date, author } = this.props;
    let shortTitle = title.substring(0, 50);
    let shortDesc =
      description === null ? description : description.substring(0, 60);
    return (
      <div className="my-5">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top border border-2"
            width={100}
            height={150}
            src={!urlToImage ? newspaper : urlToImage}
          />
          <Card.Body>
            <Badge bg="secondary">{author}</Badge>
            <Card.Text className="text-muted">
              {new Date(date).toGMTString()}
            </Card.Text>
            <Card.Title>{shortTitle} ...</Card.Title>
            <Card.Text>{shortDesc} ...</Card.Text>
            <Card.Link
              href={url}
              target="blank"
              className="btn btn-outline-dark"
            >
              Card Link
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default NewsItem;
