import { Alert, AlertTitle } from "@/packages/Alert";

export default function SuccessAlert (){
  return(
     <Alert variant="glass" color="success" showIcon>
            <AlertTitle>Item added to cart</AlertTitle>
        </Alert>
  )
}