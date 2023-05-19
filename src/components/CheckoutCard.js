import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';

const CheckoutCard = ({ item: { id, name, price, description, image, productType }, removeItem }) => {
  const handleRemoveItem = () => {
    removeItem(id);
  };

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
          subheader="in stock"
        />
        <CardMedia key={id} component="img" height="194" image={image} alt={name} description={description} />
        <IconButton onClick={handleRemoveItem}>
          <DeleteIcon fontSize="large" />
        </IconButton>
      </Card>
    </div>
  );
};

export default CheckoutCard;