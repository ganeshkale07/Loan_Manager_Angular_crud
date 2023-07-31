export const environment = {
  production: false,
  BASE_URL : "http://localhost:3000/",
  CUSTOMER_BASE_URL : "customers/",
  LOAN_BASE_URL : "loans",
  CUSTOMER : {
    GET_ALL_CUSTOMERS : "list",
    GET_SPECIFIC_CUSTOMER : "view?id=",
    CREATE_CUSTOMER : "create",
    DELETE_CUSTOMER : "delete?id=",
    UPDATE_CUSTOMERS : "update?id=",
    SEARCH_CUSTOMERS : "search?searchby=",
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


