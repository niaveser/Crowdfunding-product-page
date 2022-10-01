import { createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {
  const products = [
    {
      id: "default",
      name: "Pledge with no reward",
      price: 0,
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    },

    {
      id: "product1",
      name: "Bamboo Stand",
      stock: 101,
      price: 25,
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
      pledge: "Pledge $25 or more",
    },

    {
      id: "product2",
      name: "Black Edition Stand",
      stock: 64,
      price: 75,
      description:
        "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included. ",
      pledge: "Pledge $75 or more",
    },
    {
      id: "product3",
      name: "Mahogany Special Edition",
      stock: 0,
      price: 200,
      description:
        "You get two Special Edition Mahogany Stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
      pledge: "Pledge $200 or more",
    },
  ];

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};
