import React, { useContext, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainProtectWraper = async ({children}) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const { captainUser, setCaptainUser } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  if (!token) {
    return useEffect(() => {
      navigate("/captain-login");
    });
  }

  const config = { headers: { Authorization: `Bearer ${token}` } };

  const response = await axios
    .post(`${import.meta.env.VITE_BASE_URL}/captain/profile`, config)
    .then((response) => {
      setCaptainUser(response.data.captain);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      localStorage.removeItem("token", token);
      navigate("captain-login");
    });

  if (isLoading) {
    return (
      <div>...Loading</div>
    )
  }

  return children;
};

export default CaptainProtectWraper;
