import React, { useEffect, useRef, useState } from "react";

import Card from "../UI/Card";

import "./Search.css";

const Search = React.memo((props) => {
  const { onLoadProducts } = props;
  const [searchItem, setSearchItem] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    const Timer = setTimeout(() => {
      if (searchItem === inputRef.current.value) {
        const query =
          searchItem.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${searchItem}"`;

        fetch(
          "https://hooks-8060d-default-rtdb.firebaseio.com/products.json" +
            query
        )
          .then((res) => res.json())
          .then((resData) => {
            const loadedProducts = [];

            for (const item in resData) {
              loadedProducts.push({
                id: item,
                title: resData[item].title,
                amount: resData[item].amount,
              });
            }

            onLoadProducts(loadedProducts);
          });
      }
    }, 500);
    return () => {
      clearTimeout(Timer);
    };
  }, [searchItem, onLoadProducts, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>جست و جو</label>
          <input
            type="text"
            value={searchItem}
            onChange={(event) => setSearchItem(event.target.value)}
            ref={inputRef}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
