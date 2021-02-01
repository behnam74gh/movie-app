import React, { useCallback, useReducer } from "react";

import ProductForm from "./ProductForm";
import Search from "./Search";
import ProductList from "./ProductList";

const productReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.products;
    case "ADD":
      return [...state, action.products];
    default:
      throw new Error("err");
  }
};

const Products = () => {
  // const [products, setProducts] = useState([]);

  const [products, dispatch] = useReducer(productReducer, []);

  const searchProductsHandler = useCallback((items) => {
    // setProducts(items);
    dispatch({ type: "SET", products: items });
  }, []);

  const addProductHandler = (item) => {
    fetch("https://hooks-8060d-default-rtdb.firebaseio.com/products.json", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "applo=ication/json" },
    })
      .then((res) => res.json())
      .then((resData) => {
        // setProducts((prevState) => {
        //   return [
        //     ...prevState,
        //     {
        //       id: resData.name,
        //       ...item,
        //     },
        //   ];
        // });
        dispatch({ type: "ADD", products: { id: resData.name, ...item } });
      });
  };

  return (
    <div className="App">
      <ProductForm onAddProduct={addProductHandler} />

      <section>
        <Search onLoadProducts={searchProductsHandler} />
        <ProductList products={products} onRemoveItem={() => {}} />
      </section>
    </div>
  );
};

export default Products;
