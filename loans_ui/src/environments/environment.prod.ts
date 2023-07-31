export const environment = {
  production: true,
  BASE_URL : "http://localhost:3000", 
  CUSTOMER_BASE_URL : "customers",
  LOAN_BASE_URL : "loans",
  CUSTOMER : {
    GET_ALL_CUSTOMERS : "list",
    GET_SPECIFIC_CUSTOMER : "view",
    CREATE_CUSTOMER : "create",
    DELETE_CUSTOMER : "delete",
    UPDATE_CUSTOMERS : "update",
    SEARCH_CUSTOMERS : "search",
  },
  LOAN : {
    GET_ALL_LOANS : "list",
    GET_LOAN : "view",
    CREATE_LOANS : "create",
    DELETE_LOANS : "delete",
    UPDATE_LOANS : "update",
    SEARCH_LOANS : "search",
  }
};
