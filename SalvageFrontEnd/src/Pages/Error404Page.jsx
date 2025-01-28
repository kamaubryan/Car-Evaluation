import { Button, Result } from "antd";
import "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <Result
      status={"404"}
      title="Ooops!"
      subTitle={"Sorry, this page is not available."}
      extra={
        <Button type="primary" onClick={() => navigate("/home")}>
          Back home
        </Button>
      }
    />
  );
}

export default ErrorPage;
