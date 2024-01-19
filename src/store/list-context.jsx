import { createContext, useEffect, useState } from "react";


export const ListContext = createContext({
    items : [],
    onUpdate : (task) => {},
    onDelete : (taskId) => {},
    onSearch : (taskUrl) => {}
})

export default function ListContextProvider({children}){
    

    let items = localStorage.getItem("myDataStorage");
    if(items) items = JSON.parse(items);
    else items = [];
    const [currItems , setItems] = useState(items)
      

    const ctxValue = {
        items : currItems,
        onUpdate : handleSubmit,
        onDelete : handleDelete,
        onSearch : handleSearch
    }  
    
    function addtoStorage(){    
        localStorage.setItem('myDataStorage', JSON.stringify(currItems));
    }
    const [selectedText, setSelectedText] = useState('');

    useEffect(() => {
        addtoStorage();
    }, [currItems]);

    
    async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }

    async function handleSubmit(task){
        if(items.length > 0) var idx = currItems.findIndex(item => item.id === task.id);
        if(idx === -1 || items.length === 0){
            const tab = await getCurrentTab()
            console.log(tab)
            const newItem = {
                id : items.length + 1,
                title : task.title,
                content : task.content,
                url : tab.url
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

    function handleSearch(taskUrl){
        const redirectUrl = taskUrl
        chrome.tabs.create({ url: redirectUrl });
    }


    return(
        <ListContext.Provider value={ctxValue}>
            {children}
        </ListContext.Provider>
    )
}