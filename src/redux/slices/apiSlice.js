import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
// const API_URL = "http://localhost:8800/api";
const API_URL = "https://collabease-server.vercel.app/api";

const baseQuery = fetchBaseQuery({ baseUrl: API_URL });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
