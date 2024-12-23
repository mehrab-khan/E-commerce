import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import Orders from './Orders'
import Footer from './Footer'
export default function AdminPanel() {
const [auth, setAuth] = useState(true)
const [adminAccess, setAdminAccess] = useState(false)
    const navigate = useNavigate()
    const [username, setUserName] = useState()
    const [password, setPassword] = useState()
    const [items, setItems] = useState([])

    const [loader, setLoader] = useState(true)

    const [mytitle, setTitle] = useState()
    const [mypiece, setPiece] = useState()
    const [myimage, setImage] = useState()
    const [myname, setName] = useState()
    const [myaddress, setAddress] = useState()
    const [myprice, setPrice] = useState()
    const [myorderStatus, setOrderStatus] = useState()
    const [myphoneNumber, setPhoneNumber] = useState()
 


    useEffect(()=>{
        let logPermit = localStorage.getItem('adminLoginPermission')
        if(logPermit === 'true'){
            setAuth(false)
            setAdminAccess(true)
        }
    },[])


    
    const permitAccess = () =>{
        if(username === 'admin' && password === 'admin'){
            localStorage.setItem('adminLoginPermission', true)
            setAuth(false)
            setUserName('')
            setPassword('')
            setAdminAccess(true)
        }
        else{
            alert("Wrong Information Please Try Again")
        }
    }


    useEffect(()=>{
        const url = 'https://market-291cb-default-rtdb.firebaseio.com/data.json'
        fetch(url)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            const fetchedData = []
            for(let key in data){
                fetchedData.push({id : key, ...data[key]})
            }
            setItems(fetchedData)
            setLoader(false)
            console.log(fetchedData)
        })
        .catch((err)=>{
            console.error(err)
        })
    },[])


    const deleteOrder = (id) =>{
        const url = `https://market-291cb-default-rtdb.firebaseio.com/data/${id}.json`
        fetch(url,{
            method : "DELETE",
         
        })
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            console.log("Data Deleted")
            setItems((prevItems) => prevItems.filter((item) => item.id !== id));
        })
        .catch((err)=>{
            console.log(err)
        })
    }
 

    

    useEffect(()=>{
        for(let i of items){
            console.log(i.address)
            setAddress(i.address)
            setImage(i.image)
            setName(i.name)
            setPrice(i.price)
            setPiece(i.piece)
            setTitle(i.title)
            setPhoneNumber(i.phoneNumber)
            setOrderStatus(i.orderStatus)
        }
    },[items])
   

 

    const deleveryComplete = (id) =>{
        const url = `https://market-291cb-default-rtdb.firebaseio.com/data/${id}.json`
      fetch(url,{
        method : "PUT",
        headers : {
            'Content-Type' : 'application/json'
        }
        ,
        body : JSON.stringify({
            title: mytitle + ' ',
            image: myimage + ' ',
            price: myprice + ' ',
            name: myname + ' ',
            phoneNumber: myphoneNumber + ' ',
            address: myaddress + ' ',
            piece: mypiece + ' ',
            orderStatus : true
                
              }),
        
        
      })
      .then((res)=>{
        return res.json()
      })
      .then((data)=>{
        console.log(data)
      })
      .catch((err)=>{
        console.error(err)
      })
    }



  return (
    <div>
      <Navbar name="Gadget Park"/>

{auth && 

      <div className='container AdminForm'>
        <p className="titleOfLogin">Admin Login Page</p>
        <hr className='adminhr'/>
        <input onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='Enter Username' className='form-control adminname' name="" id="" />
        <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter Password' className='form-control adminpass' name="" id="" />
        <p className="adminforget" onClick={()=>alert("Relax and try to Remember")}>Forget Password?</p>
        <div className="btnsAdmin">
            <button className='btn loginBtn' onClick={permitAccess}>Login</button>
            <button onClick={()=>navigate('/')} className='btn backBtn'>Back</button>
        </div>
        <p className="warn">Only Admin members can login in this page!</p>
      </div>

}


{adminAccess && 
<div className="orderedContainer container">
    

{ loader &&
        <div className='myloader'>
        <div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
        


        </div>

        }


    
 {
    items.map((myitems,index)=>(
        <Orders key={index}
         imageOfProduct={myitems.image}
         nameOfProduct={myitems.title}
         priceOfProduct={myitems.price}
         OrderByAddress={myitems.address}
         OrderByName={myitems.name}
         piece={myitems.piece}
         OrderByPhone={myitems.phoneNumber}
        deleteOrder={deleteOrder}
        deliverStatus={myitems.orderStatus}
        deleveryComplete={deleveryComplete}
        id={myitems.id}
         />
    ))
 }
</div> 
}
<Footer/>
    </div>
  )
}
