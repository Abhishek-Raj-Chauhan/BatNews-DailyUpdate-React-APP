import React from "react";
import "./Navbar.css";
export default function NewsItem(props) {
  let { title, description, imageURL, newsURL, publishTime, author, source } =
    props;
  return (
    <div
      className="card d-flex flex-column justify-content-between"
      style={{ backgroundColor: "#02002a", border: "1px solid white",overflow:'none'}}
    >
      <span
        className="position-absolute top-0 start-50 translate-middle badge rounded-pill"
        style={{ color: "white", backgroundColor: "#3d38b6" }}
      >
        {source}
        <span className="visually-hidden">source</span>
      </span>
      <a
        href={newsURL}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color: "black" ,overflow:'hidden', display:'flex',justifyContent:'space-evenly',alignItems:'center',flexDirection:'column'}}
      >
        <img
          src={
            imageURL===null || imageURL==="https://lh3.googleusercontent.com/J6_coFbogxhRI9iM864NL_liGXvsQp2AupsKei7z0cNNfDvGUmWUy20nuUhkREQyrpY4bEeIBuc=s0-w300-rw"
              ? "https://about.fb.com/wp-content/uploads/2023/09/GettyImages-686732223.jpg?w=2880"
              : imageURL
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column justify-content-evenly" style={{ color: "white"}}>
          <h5 className="card-title">
            {title.length <= 22 ? title : title + "..."}
          </h5>
          <br />
          <p className="card-text">{description}.....</p>

          <p className="card-text">
            <small className="tex" style={{ color: "white" }}>
              <strong>Updated at : </strong>
              {publishTime}
              <br />
              <strong>Published by: </strong>
              {author}
            </small>
          </p>
          
        </div>
        
      </a>
      <div className="btn btn-sm align-self-end" style={{ color: "white" ,backgroundColor:'#3d38b6', width:'100%'}}>
      <a
        href={newsURL}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", color:'white',overflow:'hidden'}}
      >Read More</a>
        </div>
    </div>
  );
}
