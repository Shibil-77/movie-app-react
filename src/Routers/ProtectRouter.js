import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const ProtectRouter =  ({ children }) => {
  // const  dispatch = useDispatch()
   const navigate = useNavigate()
   useEffect(() => {
     const publicFu = () => {
         const token = localStorage.getItem("userId");
         if (!token) {
           navigate('/login')
         }
     };
     publicFu();
   },[]);
   const token = localStorage.getItem("userId")
   if (token !=null) {
    //  dispatch(
    //   //  userActions.userAddDetails({token:token,user:localStorage.getItem("user")})
    //  )
     return children;
   }
 };

export default ProtectRouter;