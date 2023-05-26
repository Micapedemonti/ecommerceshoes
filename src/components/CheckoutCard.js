import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';


const CheckoutCard = ({ item: { id, image, name, price, description}}) => {



  return (
    <div>
    
     <Card sx={{ maxWidth: 345 }} key={id}>
 
        <CardHeader
          action={
            <Typography variant="h5" color="textSecondary">
              {accounting.formatMoney(price, "CL")}
            </Typography>
          
        
          }
          title={name}
        
 
        
        />
        <CardMedia  component="img" height="300" alt={name} image = {image} description={description} />
    
      </Card> 

    </div>
  )

  
      }

export default CheckoutCard;