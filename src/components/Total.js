import accounting from "accounting"
import { Button } from "@mui/material"

const Total = () =>{

    return (
        <div>
         <h5>Total de Productos : 3</h5>
         <h5>{accounting.formatMoney(50.000, "CL")}</h5>
         <Button color= "secondary">
            Finalizar Compra
         </Button>
        </div>
    )
}

export default Total