import { Alert, AlertTitle } from "@/packages/Alert";

export default function SuccessAlert (){
  return(
     <Alert variant="glass" color="success" showIcon className="shadow:none text-green-500 ">
            <AlertTitle>Item added to cart</AlertTitle>
        </Alert>
  )
}