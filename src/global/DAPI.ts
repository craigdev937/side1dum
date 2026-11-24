import { createApi, 
    fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IRecData, IRecipe } from "../models/Interfaces";
const URL = "https://dummyjson.com";

export const DAPI = createApi({
    reducerPath: "DAPI",
    tagTypes: ["Recipies"],
    baseQuery: fetchBaseQuery({ baseUrl: URL }),
    endpoints: (builder) => ({
        rec: builder.query<IRecData, void>({
            query: () => ({
                url: "/recipes",
                method: "GET"
            }),
            providesTags: (result) => result ? [
                ...result.recipes.map(({ id }) => 
                    ({ type: "Recipies" as const, id })),
                { type: "Recipies", id: "LIST" },
            ] : [{ type: "Recipies", id: "LIST" }]
        }),
        recById: builder.query<IRecipe, number>({
            query: (id) => ({
                url: `/recipes/${id}`,
                method: "GET"
            }),
            providesTags: ["Recipies"]
        })
    })
});







