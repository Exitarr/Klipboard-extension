import { createContext, useEffect, useState } from "react";

var items = [];

export const ListContext = createContext({
    items : items,
    onUpdate : (task) => {},
    onDelete : (taskId) => {}
})

export default function ListContextProvider({children}){
    
    const [currItems , setItems] = useState(items)
    
      
    items = JSON.parse(localStorage.getItem("myDataStorage"));
    items = items === null ? [] : items;
      

    const ctxValue = {
        items : currItems,
        onUpdate : handleSubmit,
        onDelete : handleDelete
    }  
    
    function addtoStorage(){    
        localStorage.setItem('myDataStorage', JSON.stringify(items));
    }

    function handleSubmit(task){
        if(items.length > 0) var idx = currItems.findIndex(item => item.id === task.id);
        if(idx === -1 || items.length === 0){
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
        addtoStorage()
    }

    function handleDelete(taskId){
        setItems((prev) => {
            const updatedItems = prev.filter((item) => item.id !== taskId);
            return updatedItems;
        });
        addtoStorage()
    }


    return(
        <ListContext.Provider value={ctxValue}>
            {children}
        </ListContext.Provider>
    )
}