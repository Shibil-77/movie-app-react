import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const PublicRoute =  ({ children }) => {
  // const  dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
     const publicFu = () => {
         const token = localStorage.getItem("userId");
         if (token) {
           navigate('/')
         }
     };
     publicFu();
   },[]);
   const token = localStorage.getItem("userId")
   if (token ==null) {
    //  dispatch(
    //   //  userActions.userAddDetails({token:token,user:localStorage.getItem("user")})
    //  )
     return children;
   }
 };

export default PublicRoute;