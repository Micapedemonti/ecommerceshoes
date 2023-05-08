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

const Product = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography 
            // className={classes.action}
            variant ='h5'
            color ='textSecondary'
            >
                {accounting.formatMoney(50, "CL")}
            </Typography>
        }
        title='shoes'
        subheader="in stock"
        />
      <CardMedia
        component="img"
        height="194"
        image="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/ca6eb69651d94083889cacb60018d8bb_9366/zapatillas-forum-low.jpg"
        alt="Adidas shoes"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         Urban shoes
         {/* {productType} */}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <AddShoppingCartIcon/>
        </IconButton>
       {Array(4)
       .fill()
       .map((_, i)=>(
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
          <p>Zapatillas adidas Forum, Zapatillas con un diseño que refleja tu pasión, hechas parcialmente con material reciclado, Como una nota de amor de ti, para ti. Encuentra en esta sección zapatillas adidas Forum que celebran la iniciativa del amor propio. Por si se te olvida amarte a ti mismo recuerda que "EL AMOR PROPIO NO ES EGOÍSMO".

</p>
 {/* .          {description} */}
          </Typography>
        
        </CardContent>
      </Collapse>
    </Card>
  );
}
export default Product