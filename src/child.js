import React from "react";
import "./child.css";
export default function Child(props){
    console.log(props)
    return(
        <div>
              <p> My name is {props.na}</p>
              <p>My other name is {props.name1}</p>
              <p> My Age is {props.age}</p>
              <p>{props.imageurl}</p>
        
              <p>{props.images}</p>
              <p>{props.imgurl}</p>
              <p>{props.img1}</p>
              <p>{props.pic}</p>
              <p>{props.pic2}</p>
              <p>{props.images}</p>
        </div>        
    )
}