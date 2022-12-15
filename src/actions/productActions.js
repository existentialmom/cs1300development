import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SEASON,
    FILTER_PRODUCTS_BY_FLAVOR,
    ORDER_PRODUCTS_BY_PRICE,
  } from "./types";
  
  export const fetchProducts = () => (dispatch) => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .catch((err) =>
        fetch("db.json")
          .then((res) => res.json())
          .then((data) => data.products)
      )
      .then((data) => {
        dispatch({ type: FETCH_PRODUCTS, payload: data });
      });
  };
  
  export const filterProducts = (products, availableSeason) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_SEASON,
      payload: {
        availableSeason: availableSeason,
        items:
          availableSeason === ""
            ? products
            : products.filter(
                (x) => x.availableSeason.indexOf(availableSeason) >= 0
              ),
      },
    });
  };
  
  export const filterProducts2 = (products, flavor) => (dispatch) => {
    dispatch({
      type: FILTER_PRODUCTS_BY_FLAVOR,
      payload: {
        flavor: flavor,
        items:
          flavor === ""
            ? products
            : products.filter(
                (x) => x.flavor.indexOf(flavor) >= 0
              ),
      },
    });
  };
  
  export const sortProducts = (items, sort) => (dispatch) => {
    const products = items.slice();
    if (sort !== "") {
      products.sort((a, b) =>
        sort === "lowestprice"
          ? a.price > b.price
            ? 1
            : -1
          : a.price < b.price
          ? 1
          : -1
      );
    } else {
      products.sort((a, b) => (a.id > b.id ? 1 : -1));
    }
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: products,
      },
    });
  };
  