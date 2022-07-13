/// <reference types="cypress" />
import React from "react";
import "./App.css";
import App from "./App";

it("mounts the app", () => {
  cy.mount(<App />);
});
