import { Alert, AlertTitle } from "@/packages/Alert";

export default function AlertDemo (){
  return(
     <Alert variant='glass' color="error" showIcon>
            <AlertTitle>Unable to load profile</AlertTitle>
        </Alert>
  )
}