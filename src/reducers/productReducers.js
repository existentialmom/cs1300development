import {
    FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SEASON,
    FILTER_PRODUCTS_BY_FLAVOR,
    ORDER_PRODUCTS_BY_PRICE,
  } from "../actions/types";
  
  const initState = { items: [], filteredItems: [], season: "", sort: "" };
  export default function (state = initState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, items: action.payload, filteredItems: action.payload };
      case FILTER_PRODUCTS_BY_SEASON:
        return {
          ...state,
          filteredItems: action.payload.items,
          season: action.payload.season,
        };
        case FILTER_PRODUCTS_BY_FLAVOR:
          return {
            ...state,
            filteredItems2: action.payload.items,
            flavor: action.payload.flavor,
          };
      case ORDER_PRODUCTS_BY_PRICE:
        return {
          ...state,
          filteredItems: action.payload.items,
          sort: action.payload.sort,
        };
  
      default:
        return state;
    }
  }
  