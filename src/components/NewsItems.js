import React, { Component } from 'react';

export class NewsItems extends Component {

    render() {
        let { title, desc, imageUrl, newsUrl } = this.props;
        return <div>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={imageUrl} style={{
                    width: '286px',
                    height: '200px',
                    objectFit: 'cover'
                }} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>;
    }
}

export default NewsItems;
