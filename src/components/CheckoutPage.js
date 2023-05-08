import { Typography } from "@mui/material"
import Grid from '@mui/material/Grid';
import products from "../product-data"
import Product from "./Product";
import { Fragment } from "react";
const CheckoutPage = () =>{




const FormRow  = () =>{
    return(
<Fragment>
        { products.map((item)=>(
    <Grid item xs={12} sm={8} md={6} lg={4}>
        <Product key = {item.id} product ={item}/>
    </Grid>
        ))}
 </Fragment>
    )
}



    return (
    <div>  
    <Grid container spacing ={3}>
    <Grid item xs = {12}>
        <Typography align = 'center' gutterBottom variant = 'h4'>
            Carrito de compras
        </Typography>
    </Grid>
    <Grid item xs = {12} sm={8} md={9} container spacing ={2}>
        <Typography align = 'center' gutterBottom variant = 'h4'>
        <FormRow/>
        </Typography>
    </Grid>
    <Grid item xs = {12} sm={4} md={3} >
        <Typography align = 'center' gutterBottom variant = 'h4'>
     TOTAL
        </Typography>
    </Grid>
    </Grid>
    </div>
    )
}
export default CheckoutPage