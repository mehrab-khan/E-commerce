import React from 'react'

export default function Card({productName, productImg, productPrice, onInfoClick }) {
  return (
    <div style={{margin:'1%'}}>
      <div className="card" style={{ width: "18rem" }}>
        <div className="productIMG">
        <img src={productImg} className="card-img-top productIMG" alt="..." />
        </div>
 
  <div className="card-body">
    <h5 className="card-title">{productName}</h5>
     <div className="card-price">Price : {productPrice} BDT</div>
    <button onClick={()=> onInfoClick({ productName, productImg, productPrice })}  className="btn btn-primary">
      Information
    </button>
  </div>
</div>

    </div>
  )
}
