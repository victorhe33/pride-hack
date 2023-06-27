'use client'

import { useState } from "react";

export default function DataList(props) {
  return (
    <div className="data-list">
      {props.dataList && props.dataList.map(data => 
        <div className="data-point" key={data.id}>
          <h2>{data.name}</h2>
          <p className="data-street">
            {data.street}, {data.city}, {data.state}
          </p>
          <p>{"accessibility: " + `${data.accessible}`}</p>
          <p>{"unisex: " + `${data.unisex}`}</p>
        </div>
          )}
    </div>
  )
}