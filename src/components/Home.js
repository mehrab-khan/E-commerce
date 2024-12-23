import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'

export default function Home({websiteName}) {
const [items, setItems] = useState([])
const [searchData , setSearchData] = useState()
const [category, setCategory] = useState('All')
const [selectedProduct, setSelectedProduct] = useState(null);
const [activeForm, setActiveForm] = useState(false)
const [loader, setLoader] = useState(true)
const [name, setName] = useState()
const [address, setAddress] = useState('')
const [phoneNumber, setPhoneNumber] = useState('')
const [piece, setPiece] = useState()




    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=20')
            .then(res=>res.json())
            .then(json=>{
                let fetchedItem = [] 
                for(let i of json){
                    fetchedItem.push(i)
                     
                    setItems(fetchedItem)
                }
                setLoader(false)
            })
            
    },[])
    
    const submitData = () =>{
        
        setCategory(searchData.toLowerCase())
        
        fetch(`https://fakestoreapi.com/products/category/${searchData}`)
            .then(res=>res.json())
            .then(json=>{
                let fetchedItem = [] 
                for(let i of json){
                    fetchedItem.push(i)
                  
                    setItems(fetchedItem)
                }
            })
    }
    const handleInfoClick = (product) => {
        setSelectedProduct(product);  
        
      };
    
    


    const Order = (e) =>{
        e.preventDefault()
        if (name && phoneNumber  && address  && piece ){
        const url = 'https://market-291cb-default-rtdb.firebaseio.com/data.json'
        fetch(url, {
            method : "POST",
            headers : {
                'Content-Type' : "application/json"
            },
            body: JSON.stringify({
                title: selectedProduct.productName,
                image: selectedProduct.productImg,
                price: selectedProduct.productPrice,
                name: name,
                phoneNumber: phoneNumber,
                address: address,
                piece: piece,
                orderStatus : false
              }),
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log('Data Added')
            setActiveForm(false)
            setAddress('')
            setName('')
            setPhoneNumber('')
            setPiece('')
            
            setSelectedProduct(null)
        })
        .catch((err)=>{
            console.log("Sorry Try Again")
        })
            }
        else{
            alert("Please Fill The Form")
        }
        }

  return (
     <>
     <Navbar name={websiteName} handleSearch={submitData} setSearchData={setSearchData}/>
        <div className='dlvr'><p className='dlvrtxt'>Deliver Inside Bangladesh</p></div>
     <div className='container mainContainer'>
       
 
        <p className="category">Category : {category}</p>
        { loader &&
        <div className='myloader'>
        <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        


        </div>

        }

        <div className="cards">
           {
                items.map((data, index)=>(
                    <Card key={index} onInfoClick={handleInfoClick} productImg={data.image} productPrice={data.price} productName={data.title}/>
                ))
            }
        </div>


   
     </div>




{ selectedProduct && (
        <div className="productDetails">
            <div className="imageOfProduct ">
            <img src={selectedProduct.productImg} />
            </div>
            <div className="detailsofProduct">
                <p className="pn">NAME : {selectedProduct.productName}</p>
                <br />
                <p className="pp">PRICE : {selectedProduct.productPrice} BDT </p>
                
            </div>
            <div className="btns">
                <button className="btn addToCart" onClick={()=>setActiveForm(true)}>ADD TO CART</button>
                <button className="btn close" onClick={()=>setSelectedProduct(null)}>CLOSE</button>
                </div>
        </div>
)}
{activeForm && 
<form action="">
<div className="form">
<input required type="text" onChange={(e)=>setName(e.target.value)} className='form-control nameInput' placeholder='Enter Your Name' />
<input required type="number"onChange={(e)=>setPhoneNumber(e.target.value)} className='form-control phoneInput' placeholder='Enter Your Number' />
<input required type="text"onChange={(e)=>setAddress(e.target.value)} className='form-control addressField' placeholder='Enter Your Address' />
<input required type="number"onChange={(e)=>setPiece(e.target.value)} className='form-control pieceInput' placeholder='How many peice you want?' />

<div className="FormBtns">
<button className='btn formSubmit' onClick={(e)=>Order(e)}>Submit</button>
<button className='btn formClose' onClick={()=>setActiveForm(false)}>Close</button>
</div>

</div>
</form>


}

     <Footer/>
     </>
  )
}
