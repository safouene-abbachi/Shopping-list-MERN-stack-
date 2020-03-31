import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from "./actionType"

export const getItems = ()=>{
    return{
        type:GET_ITEMS,
        
    }
}
export const addItems = (payload)=>{
    return{
        type:ADD_ITEM,
        payload
    }
}
export const deleteItems = (payload)=>{
    return{
        type:DELETE_ITEM,
        payload
        
    }
}