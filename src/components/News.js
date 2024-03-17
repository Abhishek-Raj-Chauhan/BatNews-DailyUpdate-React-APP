import React, {useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import "./Navbar.css";
export default function News(props)  {

  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalArticles, settotalArticles] = useState(0);

  const updaTer=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url)
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(50);
    setarticles(parseData.articles)
    setloading(false)
    settotalArticles(parseData.totalResults)
    document.title = `| ${(props.category).charAt(0).toUpperCase()}${(props.category).slice(1)} | - BatNews`
    props.setProgress(100);
  }
  useEffect(() => {
        updaTer()
        // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);    

  const fetchMoreData = async() => {
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page+1}&pageSize=${props.pageSize}`
      setpage(page+1)
      let data = await fetch(url)
      let parseData = await data.json();
      setarticles(articles.concat(parseData.articles))
      settotalArticles(parseData.totalResults)
      
  };
    let headsty={
      padding:'7em 0.5em 1em 0.5em',
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    }
    return (
      <>
        <div className="text-center" style={headsty}>
          <h2 style={{height:'fit-content',display:'flex',justifyContent:'center',color:'#8ba2ff',textShadow:'0px 0px 1px #8ba2ff, 0 0 0 #8ba2ff, 0 0 3.2em #8ba2ff'}}>Top -  {(props.category).charAt(0).toUpperCase()}{(props.category).slice(1)} Headlines</h2>
          </div>
        <div className="container my-5">
        <InfiniteScroll style={{overflow:'none'}}
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalArticles}
          loader={<Spinner/>}
        >
          <div className="row my-5">
          {loading?<Spinner/>:''}
          {articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <NewsItem title={element.title===null||element.title===undefined?"":element.title} description={element.description?element.description:""} imageURL={element.urlToImage} newsURL = {element.url} publishTime={new Date(element.publishedAt).toLocaleString({timeZone:'Asia/Kolkata'})} author={element.author?element.author:"Unknown"} source={element.source.name}/>
          </div>
          })}
          </div>
          </InfiniteScroll>
        </div>
          
      </>
    );
  }
     
  News.propTypes = {
    ApiKey:PropTypes.string,
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  News.defaultProps ={
    ApiKey: 'c05e9a014d3547e4a65bff5a08858311',
    country:'in',
    pageSize:9,
    category:'general'
  }