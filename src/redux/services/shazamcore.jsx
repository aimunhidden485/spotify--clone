import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const options = {
//   method: "GET",
//   url: "https://shazam.p.rapidapi.com/charts/track",
//   params: { locale: "en-US", pageSize: "20", startFrom: "0" },
// headers: {
//         "X-RapidAPI-Key": "7d6b9f3b8dmsh09be9bc15d2d7e3p1c29edjsn9233dd156eb2",
//                 "X-RapidAPI-Host": "shazam.p.rapidapi.com",
//         },
// };
const token = "KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA";
const url = "https://shazam-core.p.rapidapi.com/v1";
export const shazamCoreApi = createApi({
        reducerPath: "shazamCoreApi",
        baseQuery: fetchBaseQuery({
                baseUrl: "https://shazam.p.rapidapi.com",
                prepareHeaders: (headers) => {
                        headers.set("X-RapidAPI-Key", "7d6b9f3b8dmsh09be9bc15d2d7e3p1c29edjsn9233dd156eb2");

                        return headers;
                },
        }),
        endpoints: (builder) => ({
                getTopCharts: builder.query({ query: () => "/charts/track" }),
        }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
