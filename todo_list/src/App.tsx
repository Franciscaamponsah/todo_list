import React from "react";
import { Button, Space, Input } from "antd";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Todo List</h1>
        <Space>
          <Input />
          <Button type="primary">Add</Button>
        </Space>
      </div>
    </>
  );
};

export default App;
