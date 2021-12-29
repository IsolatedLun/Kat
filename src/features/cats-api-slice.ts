import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Breed, BreedPreview } from "./consts/interfaces";

const API_KEY = 'ce249dcb-5fc8-4159-9a56-f73c972b01ae';

export const catApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thecatapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', API_KEY)

            return headers
        }
    }),

    endpoints: (builder) => {
        return { 
            fetchCats: builder.query<BreedPreview[], number | void>({
                query(limit=50, page=1) {
                    return `/breeds/?limit=${limit}&page=${page}`;
                },
            }),

            fetchByBreed: builder.query<Breed, string | void>({
                query(breed) {
                    return `/images/search?breed_id=${breed}`;
                }
            })
         }
    }
});

export const { useFetchCatsQuery, useFetchByBreedQuery } = catApi