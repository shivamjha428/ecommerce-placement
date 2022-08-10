import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Table.css"

const Post=()=>{

  const [allPost, setAllPost] = useState([]);
  const[searchTerm,setsearchTerm]=useState("");

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json();
        })
        .then((postData) => {
          // console.log(postData)
          setAllPost(postData);
          // console.log(postData[0].postImage)
        });
    }, []);



  return(
    <>
    {/* <input placeholder="Property" onChange={(e)=>{
    setsearchTerm(e.target.value);
  }}></input> */}

    <div>
        
        <select className="select"  onChange={(e)=>{
    setsearchTerm(e.target.value);
  }} >
        <option>select</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="jewelery">jewelery</option>
            <option value="electronics">electronics</option>
        </select>
    </div>

    <div>
    {allPost.filter((val)=>{
        
      if(searchTerm===""){
        return val;
      }else{
         return val.category.toLowerCase().includes(searchTerm.toLowerCase()) 

      }
    }).map((ele,i)=>{
      const renderDesc=()=>{
                alert(ele.description)
      }
      return (
                    <div key={i} className="items">
                    <img alt="img" className="i4" src={ele.image} onMouseOver={renderDesc}></img>
                    <div>
                    <div className="d1">Price={ele.price}</div>
                    <div className="d1">category={ele.category}</div>
                    </div>
                    </div>
                )
            })
        };
    </div>

    </>
  );
};

export default  Post;