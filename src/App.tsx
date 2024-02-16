import React, { useState } from 'react';
import './App.css';
import { Layout } from 'antd';
import Listing from './components/PropertyList/PropertyListings';
import Detail from "./components/PropertyDetail/PropertyDetail"
import { Provider } from "./components/PageContext";

const { Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: '70vw',
  maxWidth: '100vw',
  height: "60vh",
  border: "solid 1px #ccc"
};

function App() {
  const [detailName, setDetailName] = useState<string>("Sunrise Apartments")
  return (
    <Provider value={[detailName, setDetailName]}>
    <Layout style={layoutStyle}>
        <Sider width="30%" style={siderStyle}>
          <Listing/>
        </Sider>
        <Content style={contentStyle}><Detail/></Content>
    </Layout>
    </Provider>
  );
}

export default App;
