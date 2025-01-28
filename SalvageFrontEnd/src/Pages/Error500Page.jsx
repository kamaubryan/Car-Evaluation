import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error500Page() {
      const navigate = useNavigate();
  return (
    <Result status={"500"} title="Ooops" subTitle="Internal Server Error" extra={
        <Button type='primary' onClick={()=>{navigate("/home")

        }}> Back home</Button>
    }
      />
  );
}

export default Error500Page