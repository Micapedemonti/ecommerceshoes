import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import products from '../product-data';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const  Products = () => {
  return (
    <Box sx={{ flexGrow: 1}} className="products_container">
      <Grid container spacing={3}>
       {
        products.map(product=>(
        <Grid item xs={12} sm={6} md={5} lg={4}>
         <Product key= {product.id} product ={product}/>
        </Grid>
       ))}
       
      </Grid>
     
    </Box>
  );
}
export default Products