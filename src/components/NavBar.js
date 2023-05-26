import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from './contexts/CartContext';

const NavBar = ()=> {

 
  const [cart] = React.useContext(CartContext)



  const quantity = cart.reduce((acc, curr)=>{
      return acc + curr.quantity;
  },0)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
       
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
                      <p>MENU SHOES</p>
                </IconButton>


    

          <Typography variant="h6" component="p" color="textPrimary" sx={{ flexGrow: 1 }}>
            Hola Invitado
          </Typography>
         <div className="">
         <Button variant ="elevated" color='primary' size="small">
            <h2 >Iniciar seccion</h2>
        </Button>
        <IconButton>
        <Badge color="secondary">
        <ShoppingCartIcon fontSize="large" color="secondary"/>
               {quantity}
        </Badge>
       
       </IconButton>
     

         </div>
        </Toolbar>
      </AppBar>
     
    </Box>
    
  );
}

export default NavBar