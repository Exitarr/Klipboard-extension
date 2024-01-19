import { createContext, useEffect, useState } from "react";


export const ListContext = createContext({
    items : [],
    onUpdate : (task) => {},
    onDelete : (taskId) => {}
})

export default function ListContextProvider({children}){
    

    let items = localStorage.getItem("myDataStorage");
    if(items) items = JSON.parse(items);
    else items = [];
    const [currItems , setItems] = useState(items)
      

    const ctxValue = {
        items : currItems,
        onUpdate : handleSubmit,
        onDelete : handleDelete
    }  
    
    function addtoStorage(){    
        localStorage.setItem('myDataStorage', JSON.stringify(currItems));
    }
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        addtoStorage();
    }, [currItems]);

//   const handleCopy = () => {
//     // Get the currently selected text
//     const selection = window.getSelection();
//     setSelectedText(selection.toString());
//     const link = `${window.location.href}#${selection}`;
//   };

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