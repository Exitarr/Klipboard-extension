import { createContext, useState } from "react";
import { items } from "../data";

export const ListContext = createContext({
    items : items,
    onUpdate : (task) => {},
    onDelete : (taskId) => {}
})

export default function ListContextProvider({children}){
    const [currItems , setItems] = useState(items)


    const ctxValue = {
        items : currItems,
        onUpdate : handleSubmit,
        onDelete : handleDelete
    }   

    function handleSubmit(task){
        const idx = currItems.findIndex(item => item.id === task.id);
        if(idx === -1){
            const newItem = {
                id : items.length + 1,
                title : task.title,
                content : task.content,
                url : "https://www.youtube.com/"
            }
            setItems((prev) => {
                return [...prev , newItem]
            });
        }
        else{
            setItems((prev) => {
                const updatedItems = [...prev];
                updatedItems[idx] = task;
                return updatedItems;
            });
        }
    }

    function handleDelete(taskId){
        setItems((prev) => {
            const updatedItems = prev.filter((item) => item.id !== taskId);
            return updatedItems;
        });
    }


    return(
        <ListContext.Provider value={ctxValue}>
            {children}
        </ListContext.Provider>
    )
}