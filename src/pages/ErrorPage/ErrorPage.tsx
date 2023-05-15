import { Result } from "antd";
import { useRouteError, Link } from "react-router-dom";
import FillButton from "../../components/UI/Buttons/FillButton";

const ErorPage = () => {
  const status = "404";
  return (
    <Result
      status={status}
      title={status}
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Link to={"/home"}>
          <FillButton>Back Home</FillButton>
        </Link>
      }
    />
  );
};
export default ErorPage;
