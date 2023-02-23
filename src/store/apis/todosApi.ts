import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../interfaces/Interfaces';

export const todosApi = createApi(
    {
        reducerPath: 'todos',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://jsonplaceholder.typicode.com'
        }),
        endpoints: (builder) => ({

            getTodos: builder.query<User[],string>({
                query: () => '/todos'
            }),
            getTodo: builder.query<User,number>({
                query: (todoId) => `/todos/${ todoId }`
            }),
        })
    }
)

export const { useGetTodosQuery,useGetTodoQuery } = todosApi;