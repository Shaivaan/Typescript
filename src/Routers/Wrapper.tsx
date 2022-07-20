import { useLocation, useNavigate } from "react-router-dom";



export const Wrapper = (Component:any) => {
  const Wrapper = (props:any) => {
    const navigate = useNavigate();
    const location = useLocation();

    return <Component navigate={navigate} location={location} {...props} />;
  };

  return Wrapper;
};