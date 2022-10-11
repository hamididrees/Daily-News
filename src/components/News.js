import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  capitalizeFirstLetter = (letter) => {
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} - Daily News!`;
  }
  async componentDidMount() {
    console.log("cdm");
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_API_KEY}&page=1&pageSize=20`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    const parseData = await data.json();
    console.log(parseData.articles);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  handlePrevButton = async () => {
    console.log("nahi");
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=1ab7f386fe074026ab3be5483db500cf&page=${
      this.state.page - 1
    }&pageSize=20`;
    this.setState({
      loading: true,
    });
    const data = await fetch(url);
    const parseData = await data.json();
    console.log(parseData.articles);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
    this.props.setProgress(100);
  };

  handleNextButton = async () => {
    console.log("aaho");
    this.props.setProgress(10);
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=1ab7f386fe074026ab3be5483db500cf&page=${
        this.state.page + 1
      }&pageSize=20`;
      this.setState({
        loading: true,
      });
      const data = await fetch(url);
      const parseData = await data.json();
      console.log(parseData.articles);
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
      this.props.setProgress(100);
    }
  };

  render() {
    return this.state.loading === true ? (
      <Spinner />
    ) : (
      <div className="my-5">
        <h2 className="text-center">
          Daily News - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h2>
        <Container>
          <Row>
            {this.state.articles.map((element) => {
              return (
                <Col key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    urlToImage={element.urlToImage}
                    url={element.url}
                    date={element.publishedAt}
                    author={element.source.name}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="container my-5 d-flex justify-content-center">
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevButton}
            >
              &larr; Prev
            </Button>
            <Button
              variant="secondary"
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
              }
              onClick={this.handleNextButton}
            >
              Next &rarr;
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}

export default News;
