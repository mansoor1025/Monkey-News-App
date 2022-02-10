import React, { Component } from 'react';
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            currentArticles: 0,
            prevArticles: 0,
        }
    }

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    updated_news = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=347e588256664af2bd85044052e2d821`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articles: this.state.articles.concat(parseData.articles), totalResults: parseData.totalResults, loading: false });
        document.title = `${this.capitalize(this.props.category)} News-App`
    }

    async componentDidMount() {
        this.updated_news()
    }

    fetchMoreData = () => {
        this.updated_news()
    };

    render() {
        let handleNext = async () => {
            this.setState({ page: this.state.page + 1 });
            this.updated_news()
        }

        let handlePrev = async () => {
            this.setState({ page: this.state.page - 1 });
            this.updated_news()
        }

        return <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={true}
            loader={<Spinner />}
        >
            <div className='container my-3' >
                <h1 className='my-3 text-center'>Top Headlines - {this.capitalize(this.props.category)} Category</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        {
                            if (element.urlToImage != null)
                                return <div className='col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 my-3' key={element.urlToImage}>
                                    <NewsItems title={element.title ? element.title.slice(0, 18) : ""} desc={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                                </div>
                        }
                    })}
                </div>

            </div>
        </InfiniteScroll>


    };



}

News.defaultProps = {
    country: "us",
    category: "health"
}

News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string
}

export default News;
