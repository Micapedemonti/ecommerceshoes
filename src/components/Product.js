import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';
import { CartContext } from './contexts/CartContext';
import { useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete'
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Product = ({product: {id, name, productType,price, rating,image,description}}) => {
  const [expanded, setExpanded] = React.useState(false);
 
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



//funcion agregar al carrito

const [cart,setCart]= useContext (CartContext)

  const addToCart =() =>{
    setCart((currItems)=>{
      const isItemsFound = currItems.find((product)=> product.id === id);
      if(isItemsFound){
        return currItems.map((product)=>{
          if(product.id === id){
            return {...product, quantity:product.quantity + 1 } 
          } else {
              return product;
            }
          
        });
      }else{
        return [...currItems, { id,quantity:1,price,image,description,name}]
      }
    }
  )
}

const removeItem = (id) =>{
  setCart((currItems)=>{
      if(currItems.find((item) =>item.id === id)?.quantity === 0){
        return currItems.filter((item)=> item.id !== id);
      } else {
        return currItems.map((item)=>{
          if(item.id === id ){
            return {...item, quantity:item.quantity - 1}
          } else{
            return item;
          }
        })
      }
  }) 
};

const getQuantityById = (id)=>{
return  cart.find((item)=> item.id === id)?.quantity || 0 ;
} 
const quantityPerItem = getQuantityById(id)


  return (
    <Card sx={{ maxWidth: 345 }}>
  
      <CardHeader
        action={
            <Typography 
            // className={classes.action}
            variant ='h5'
            color ='textSecondary'
            >
                {accounting.formatMoney(price , "CL")}
            </Typography>
        }
      
        subheader="in stock"
        />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
        
      />
        {quantityPerItem > 0 && (
      <div>{quantityPerItem}</div>
    )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">

         {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
   

      {quantityPerItem === 0 ? (
        <IconButton aria-label="add to favorites" onClick={addToCart}>
          <AddShoppingCartIcon/>
        </IconButton>

      ):
      (
        
        <IconButton aria-label="add to favorites" onClick={addToCart}>
          <AddShoppingCartIcon/>
        </IconButton>
      )}


      {quantityPerItem > 0 && (
        <IconButton aria-label="add to favorites" onClick={()=>removeItem(id)}>
              <DeleteIcon/>
              <Link to ="/checkout-page">Ir al carrito</Link>
        </IconButton>

        
       
      )}
        {/* <IconButton aria-label="add to favorites">
     

        </IconButton> */}
   
        
       {Array(4)
       .fill()
       .map((rating)=>(
        <p>&#11088;</p>
       ))}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          <p>
         {description}
         </p>
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Product