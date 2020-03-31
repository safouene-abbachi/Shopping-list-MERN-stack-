import {v1 as uuid} from "uuid";
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from "../actions/actionType"
const initialState={
    items:[{
        id:uuid(),
        name:"egs"
    },{
       id:uuid(),
       name:"milk"
   },{
       id:uuid(),
       name:"bread"
   },{
       id:uuid(),
       name:"wcandyater"
   }]
}

export default function (state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            }
            case ADD_ITEM:
                return {
                    ...state,
                    items: [...state.items,action.payload]
                  }
                  case DELETE_ITEM:
                      return{...state, items:state.items.filter(el=>el.id!==action.payload)}
            default :
            return state
    }
}