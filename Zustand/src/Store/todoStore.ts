import {create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
    id : number ,
    text : string ,
}
type States = {
    todos : Todo[] | []
}
type Actions = {
    addTodo : (todo : Todo ) => void 
    removeTodo : (id : number ) => void 
}

const stateCreatorFunction  =(set : any ) =>({
    todos : [] as Todo[],
    addTodo : (todo : Todo) => set((state : States )=> ({todos : [todo , ...state.todos ]})),
    removeTodo : (id : number)=> set((state : States ) =>{
        let filteredArray : Todo[] | [] = state.todos.filter((todo : Todo) =>  todo.id != id);
        return {todos : [...filteredArray]}
    })
})

const useTodoStore = create<States & Actions>(persist(stateCreatorFunction, {name : "todo"}))

export default  useTodoStore;