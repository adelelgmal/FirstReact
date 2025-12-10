import React from "react";

export default function Card(props) {
  return (
    <>
      
        <div className="col-lg-4 ">
          <div className=" ">
            <img
              src={props.imgsrc}
              className="w-100 rounded-3 "
              alt=""
            />
          </div>
        </div>
  
    </>
  );
}
