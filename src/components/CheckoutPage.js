import { Typography } from "@mui/material"
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Fragment } from "react";
import { useStateValue } from "../StateProvider";
import Total from "./Total";
import CheckoutCard from "../components/CheckoutCard"

const CheckoutPage = () =>{
    const [{cart},dispatch] = useStateValue()



const FormRow  = () =>{
    return(
<Fragment>
        {cart?.map((item)=>(
    <Grid item xs={12} sm={8} md={6} lg={4}>
        <CheckoutCard key={item.id} product={item}/>
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