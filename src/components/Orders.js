import React, { useRef } from 'react'

export default function Orders({deliverStatus, piece, id, deleveryComplete, deleteOrder, nameOfProduct, imageOfProduct, priceOfProduct, OrderByName, OrderByPhone, OrderByAddress }) {

  const mydeleveredButton = useRef()

  const changeColor = () => {
    mydeleveredButton.current.style.backgroundColor = "green"
  }

  const totalPrice = piece * priceOfProduct
   
  
  const style = {
    width: '100%',
   marginTop: '4%',
   backgroundColor : '#007bb6'
  }
  const coloredStyle = {
     width: '100%',
   marginTop: '4%',
   backgroundColor : 'green'
  }
  return (
    <div className='infoCard'>
      <div style={{ margin: '1%' }}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="productIMG">
            <img src={imageOfProduct} className="card-img-top productIMG" alt="..." />
          </div>

          <div className="card-body">
            <h5 className="card-title"> </h5>
            <p className="pname odata">Product Name : <span className="productO">{nameOfProduct}</span></p>
            <p className="ordername piece">Piece : <span className="productO">{piece}</span></p>
            <p className="pprice odata">Total Price : <span className="productO">{totalPrice}</span></p>
            <p className="ordername odata">Order By : <span className="productO">{OrderByName}</span></p>
            <p className="orderphone odata">Mobile : <span className="productO">{OrderByPhone}</span></p>
            <p className="orderaddress odata">Address : <span className="productO">{OrderByAddress}</span></p>

            <button onClick={() => deleteOrder(id)} style={{ width: "100%", backgroundColor: 'red', border: "none" }} href="#" className="btn btn-primary">
              Delete
            </button>

            <button ref={mydeleveredButton} onClick={() => {
              deleveryComplete(id);
              changeColor();
            }} style={deliverStatus ? coloredStyle : style}   className="btn btn-primary dlbtn">
              Delevery Complete
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
