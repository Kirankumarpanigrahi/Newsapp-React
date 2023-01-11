import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general",
    pagesize: 6,
  };
  PropTypes = {
    pagesize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };
  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apikey}&page=${
      this.state.page + 1
    }&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // console.log("fetched");
    // console.log(data);
    let parshData = await data.json();
    // console.log(parshData);
    this.setState({
      articles: this.state.articles.concat(parshData.articles),
      page: this.state.page + 1,
    });
  };
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: false, page: 1, totalResults: 0 };
    document.title = `DailyNews-${this.capitalize(this.props.category)}`;
  }
  getUpdate = async () => {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    this.props.setProgress(30);
    let data = await fetch(url);
    // console.log("fetched");
    // console.log(data);
    let parshData = await data.json();
    this.props.setProgress(70);
    // console.log(parshData);
    this.setState({
      articles: parshData.articles,
      totalResults: parshData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  };
  async componentDidMount() {
    this.getUpdate();
  }
  // handelPrevPage = async () => {
  //   this.setState({
  //     page: this.state.page - 1,
  //     getUpdate()
  //   });
  // };
  // handelNextPage = async () => {
  //  this.setState({
  //     page: this.state.page + 1,
  //     getUpdate()
  //   });
  // };
  render() {
    return (
      <>
        {/* {this.fetchData()} */}
        <h1
          className="text-center"
          style={{ margin: "10px 0px", marginTop: "80px" }}
        >
          Dailydose of News-Top {this.capitalize(this.props.category)} Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((ele) => {
                return (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItems
                      title={
                        ele.title
                          ? ele.title.length < 70
                            ? ele.title
                            : ele.title.slice(0, 70)
                          : ""
                      }
                      desc={
                        ele.description
                          ? ele.description.length < 87
                            ? ele.description
                            : ele.description.slice(0, 87)
                          : ""
                      }
                      imageUrl={ele.urlToImage}
                      newsUrl={ele.url}
                      author={ele.author ? ele.author : "Unknown"}
                      date={ele.publishedAt}
                      name={ele.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}
