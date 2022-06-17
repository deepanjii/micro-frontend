import Header from "./components/Header";
import MarketingApp from "./components/MarketingApp";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from '@material-ui/core/styles';

export default function App() {
  const generateClassName = createGenerateClassName({
    productionPrefix: "cont"
  });

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};