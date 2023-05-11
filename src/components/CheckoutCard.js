import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';

const CheckoutCard = ({product:{ id, name, price, description,image, productType}}) =>{

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


    return (
        <div>
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
        title={name}
        subheader="in stock"
        />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
   
     <IconButton>  <DeleteIcon fontSize='large'/></IconButton>
    </Card>
        </div>
    )
}

export default CheckoutCard