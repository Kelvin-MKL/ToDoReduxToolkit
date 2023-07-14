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

            {items.map((item) => (
                <div key={item.id} className="card">
                    
                        <div style={{}}>{item.name}</div>
                        <div style={{height: "180px"}}>{item.place}</div>
                        <button className="memo-delete" onClick={() => dispatch(deleteItem({id:item.id}))}>delete</button>

                </div>))
            }

  
        
        </div>
    </>);
}
 
export default ToDoList;