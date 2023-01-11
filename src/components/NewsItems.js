import React from "react";

export default function NewsItems(props) {
  const { title, desc, imageUrl, newsUrl, author, date, name } = props;
  return (
    <div>
      <div style={{ height: "35rem" }} className="card my-3">
        <span
          className="badge rounded-pill bg-danger"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "flex-end",
            right: "0",
          }}
        >
          {name}
        </span>
        <img
          src={imageUrl}
          style={{ height: "17rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{desc}...</p>
          <p className="card-text">
            `By {author} on {new Date(date).toGMTString()}`
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-primary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
