// import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import { useContext } from "react";
// import { CartContext } from "./contexts/CartContext";
// import CheckoutCard from "./CheckoutCard";

// const CheckoutPage = () => {
//   const [cart] = useContext(CartContext);

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={8} md={6}>
//           <Typography align="center" gutterBottom variant="h4">
//             Shopping Cart
//           </Typography>
//           {cart.length > 0 ? (
//             cart.map((item) => (
//               <CheckoutCard key={item.id} item={item} />
//             ))
//           ) : (
//             <Typography align="center" variant="body1">
//               No items in the cart.
//             </Typography>
//           )}
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default CheckoutPage;


import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { CartContext } from "./contexts/CartContext";
import CheckoutCard from "./CheckoutCard";

const CheckoutPage = () => {
  const [cart, setCart] = useContext(CartContext);

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <Typography align="center" gutterBottom variant="h4">
            Shopping Cart
          </Typography>
          {cart.length > 0 ? (
            cart.map((item) => (
              <CheckoutCard
                key={item.id}
                item={item}
                removeItem={removeItem}
              />
            ))
          ) : (
            <Typography align="center" variant="body1">
              No items in the cart.
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CheckoutPage;