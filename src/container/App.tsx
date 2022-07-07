import React, { useState } from 'react';
import { Spin } from 'antd';
import { createServer } from "miragejs";
import Region from './Region';
import MockData from './Mockdata';

createServer({
  routes() {
    this.get("/api/properties", () => MockData);
  },
});

const App = () => {
  const [isLoading, setLoading] = useState(false);
  return (
    <Spin spinning={isLoading}>
      <Region setLoading={setLoading} />
    </Spin>
  );
}

export default App;