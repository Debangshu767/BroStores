import React from "react";
import  ReactDOM  from "react-dom/client";
import { FakeStoreProvider } from "./utils/fetchFromApi";

import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render( <FakeStoreProvider>
    <App />
  </FakeStoreProvider>)