import { useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const ProtectRouter = ({ children }) => {

  const navigate = useNavigate()
  useEffect(() => {
    const publicFu = () => {
        const userId = localStorage.getItem("userId");
        console.log(userId)
        if (userId) {
          navigate('/')
        }
    };
    publicFu();
  },[]);
  const userId = localStorage.getItem("userId")
  if (userId ==null) {
    return children;
  }
};

export default ProtectRouter;