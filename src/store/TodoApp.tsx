import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./apis"


export const TodoApp = (): JSX.Element => {

    const [todoId,setTodoId] = useState(1);

    // const {data:todos =[] , isLoading } = useGetTodosQuery('root');
    const {data: todo , isLoading } = useGetTodoQuery(todoId);

    const nextTodo = () => {
        if(todoId<200)
        setTodoId(todoId + 1 )
    }

    const prevTodo = () => {
        if(todoId>1)
        setTodoId(todoId - 1 )
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>IsLoading {isLoading ? 'true' : 'false'}</h4>
            <pre>{JSON.stringify(todo)}</pre>

            <button onClick={() => {prevTodo()}}>
                Prev Todo
            </button>
            <button onClick={() => {nextTodo()}}>
                Next Todo
            </button>

            {/* <ul>
                {
                    todos.map( ({id,title,completed}) => (
                        <li key={id}>
                            <strong>{completed ? 'Done':'Pending'} </strong>
                            {title}
                        </li>
                    )
                    )
                }
            </ul> */}


        </>
    )
}