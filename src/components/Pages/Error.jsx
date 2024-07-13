import { useParams } from "react-router-dom";

const Error = () => {
  const param = useParams();
  console.log(param);
  return <div className="text-6xl">404 NOT FOUND</div>;
};

export default Error;
