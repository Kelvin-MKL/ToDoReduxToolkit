import { useAppDispatch, useAppSelector } from "../store/store";
import { changeItemStatus, deleteItem } from "../store/slices/itemSlice";
import Form from "./Form"



const ToDoList = () => {
    const items = useAppSelector((state) => state.item.items);
    const dispatch = useAppDispatch();

    const handleDeleteAnimation = (index: number) => {
        // param: item id
        // call changeItemStatus method, it will then trigger re-rendaring.
        // After 1s (duration for animation), time out and fire delete item method. 

        dispatch(() => dispatch(changeItemStatus({ id: index })))
        setTimeout(() =>dispatch(deleteItem({ id:index })), 1000)
        
        
    }
    
    return ( 
    <>
        <Form></Form>
            
        <div className="list-container"> 
        
            {items.map((item) => 
                <div key={item.id} className={ item.isFinished ? "card finished" : "card"  }>
                        
                        <div >{item.name}</div>
                        <div >{item.isFinished}</div>
                        <div style={{height: "180px"}}>{item.place}</div>
                        <button className="memo-delete" onClick={() =>handleDeleteAnimation(item.id) }>Finish</button>

                </div> )
            }

  
        
        </div>
    </>);
}
 
export default ToDoList;