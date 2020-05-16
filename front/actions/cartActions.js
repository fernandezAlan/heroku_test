import axios from "axios"
import {CART} from "../constans"

export const cart = (dataProducts) => ({
    type: CART,
    dataProducts,
  });
    
    
    

  
   


  export const deleteProductData=(productId) => dispatch =>{
      return axios.delete(`/api/cart/delete/${productId}`)
    .then(()=>{
      return axios.get("/api/cart/getDataProducts")
  .then(allDataProducts => {
    dispatch(cart(
      allDataProducts.data,
      ))
    })
  })
}


export const getDigitalProducts=()=>dispatch=>
axios.get("/api/cart/getDigitalProduct")
.then(allDataProducts => {
  dispatch(cart(
    allDataProducts.data,
    ))
  });




export const getCart = () => dispatch =>
axios.get("/api/cart/getDataProducts")
.then(allDataProducts => {
  dispatch(cart(
    allDataProducts.data,
    ))
  });

  
  export const modifyDataProduct =(id,quantity,user)=> dispatch =>{
    axios.put("/api/products/modifyQuantity",{quantity:quantity,productDataId:id})
    .then((newData)=>{
      if(user){
        axios.get(`/api/cart/getDataProducts`)
        .then(alldataProducts => {
          dispatch(cart(
            alldataProducts.data,
            ))
          })
        }
      else{
        let dataProduct= JSON.parse(localStorage.getItem("dataWithoutUser"))
        dataProduct.map((e)=>{
          if(e.id===newData.data.id){
            e.quantity=quantity
          }
        })
        dispatch(cart(
          dataProduct,
          ))
        localStorage.setItem("dataWithoutUser",JSON.stringify(dataProduct))
  
      }
    })
  }
  
  

  export const cartWithoutUser = (dataProduct)=>dispatch =>{
    dispatch(cart(
      dataProduct
      ))
     }    
    
          
        
  
   
            
      
   
      
        
     
          
     
      
      
   
        
        
       
          
    


    
  
  
  


        
      
   
   
     
      
      
      
       
        
        



      
   