import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteItem } from "../store/slices/itemSlice";
import Form from "./Form"

const ToDoList = () => {
    const items = useAppSelector((state) => state.item.items);
    const dispatch = useAppDispatch();

    return ( 
    <>
        <Form></Form>
            
        <div className="list-container"> 
        
            {items.map((item) =>  
                <div key={item.id} className={ item.isFinished ? "card finished" : "card"  }>
                    
                        <div >{item.name}</div>
                        <div >{item.isFinished}</div>
                        <div style={{height: "180px"}}>{item.place}</div>
                        <button className="memo-delete" onClick={() => dispatch(deleteItem({id:item.id}))}>Finish</button>

                </div> )
            }

  
        
        </div>
    </>);
}
 
export default ToDoList;