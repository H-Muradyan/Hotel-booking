export const sellerDataReducer = (state = [], action) => {
    switch (action.type) {
      case "GET_SELLER_HOTELS":
        return action.payload;
      default:
        return state;
    }
  };
  