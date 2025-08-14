import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions'
import axios from 'axios'

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:5000/products")
            .then((response) => {
                setProducts(response.data)

            })
            .catch((error) => {
                console.log("fetching data failed:", error)
            })
    }, [])


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
        <div style={{ display: "flex", gap: "1rem", flexwrap: "wrap", marginTop: "15px" }}>
            {products.map((pro, index) => (

                <Card key={index} sx={{ maxWidth: 400 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pro.imageUrl}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                                {pro.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {pro.description}
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'blue', fontSize: '15px', marginTop: "10px" }}>
                                {pro.status}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "5px", cursor: "pointer", borderRadius: "5px" }}>
                            <Button variant="contained" style={{ backgroundColor: "seagreen" }}>ADD CART</Button>
                            <Button variant="contained" style={{ backgroundColor: "palevioletred " }}>BUY NOW</Button>
                        </div>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Home
