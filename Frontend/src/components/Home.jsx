import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
import axios from 'axios'
import axiosInstance from '../axiosinterceptor'
import { Navigate,useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([])
    let token = localStorage.getItem('token')

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                setProducts(response.data)

            })
            .catch((error) => {
                console.log("fetching data failed:", error)
            })
    }, [])

     let navigate=useNavigate()
    let updatepro=(pro)=>{
      navigate('/add',{state:{pro}})
    }


    let deletepro=(id)=>{
      axiosInstance.delete("http://localhost:5000/products/delete/"+id)
.then((res)=>{
  window.location.reload()
  alert("deleted successfully")

}) 
.catch(err)
console.log(err)
   }


    // const products = [{
    //     title: "PERFUMES",
    //     description: "Conveys a crisp and clean scent, often associated with citrus, herbs, or aquatic notes",
    //     status:"Available",
    //     ImageUrl: "perfumes.jpg"
    // },
    // {
    //     title: "FACE WASHES",
    //     description: "Conveys a crisp and clean scent, often associated with citrus, herbs, or aquatic notes",
    //     status: "Available",
    //     ImageUrl: "https://www.simpleskincare.in/cdn/shop/files/02_phone_homepage_banners-1.jpg?v=1742468719"
    // },
    // {
    //     title: "LIPSTICKS",
    //     description: "Conveys a crisp and clean scent, often associated with citrus, herbs, or aquatic notes", 
    //     status: "Out of stock",
    //     ImageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkv3P0U9yLbg_oZ4EXeydpR9X6-JYCs3bWtw&s"
    // }]
    return (
        <div style={{display: 'flex',flexDirection:"row", flexWrap:"wrap",gap: "1rem", marginTop: "15px",justifyContent:"center" }}>
            {products.map((pro, index) => (

                <Card key={index} sx={{ maxWidth: 400,width:"100%"}}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="250"
                            image={pro.imageUrl}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                {pro.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {pro.description}
                            </Typography>
                            <Typography variant="body2" sx={{  fontSize: '15px', marginTop: "10px" ,color: pro.status==="Available"?'blue':'red'}}>
                                {pro.status}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "5px", cursor: "pointer", borderRadius: "5px" }}>
                             {token && (
              <>
                            <Button variant="contained"onClick={()=>updatepro(pro)} style={{ backgroundColor: "seagreen" }}>EDIT</Button>
                            <Button variant="contained" onClick={()=>deletepro(pro._id)} style={{ backgroundColor: "palevioletred " }}>DELETE</Button>
                            </>
                             )}
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
