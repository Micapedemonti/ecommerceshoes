import accounting from "accounting"
import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import Products from "./Products"
const Total = () =>{

    return (
        <div>
         <h5>Total de Productos : 3</h5>
         <h5>{accounting.formatMoney(50.000, "CL")}</h5>
         <Link to ="/">
         <Button color= "secondary">
            Finalizar Compra
         </Button>
         </Link>
        </div>
    )
}

export default Total