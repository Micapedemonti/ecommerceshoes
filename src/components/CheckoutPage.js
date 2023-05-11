import { Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import products from "../product-data"
import CheckoutCard from "./CheckoutCard";
import { Fragment } from "react";
import Product from "./Product";
import Total from "./Total";

const CheckoutPage = () =>{
   


const FormRow  = () =>{
    return(
<Fragment>
        { products.map((item)=>(
    <Grid item xs={12} sm={8} md={6} lg={4}>
        {/* <CheckoutCard key = {item.id} product= {item}/> */}
        <CheckoutCard key = {item.id} product= {item}/>
    </Grid>
        ))}
 </Fragment>
    )
}


    return (
   
    <div>  

     <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing ={2}>
   
    <Grid item xs = {12} sm={8} md={6}>
        {/* <Typography align = 'center' gutterBottom variant = 'h4'> */}
        Shopping Cart
        {/* </Typography> */}
    </Grid>
    <Grid item xs = {12} sm={8} md={6} container spacing ={2}>
        <FormRow/>

        <Typography align = 'center' gutterBottom variant = 'h4'>
     <Total/>
        </Typography>
    </Grid>
  
    </Grid>
 
    </Box>
    </div>

    )
    }
export default CheckoutPage