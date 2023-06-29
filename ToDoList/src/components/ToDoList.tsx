import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteItem } from "../store/slices/itemSlice";

const ToDoList = () => {
    const items = useAppSelector((state) => state.item.items);
    const dispatch = useAppDispatch();

    return <div className="list-container"> 

            {items.map((item) => (
                <div key={item.id} className="card">
                    
                        <p>{item.id}</p>
                        <p>{item.name}</p>
                        <p>{item.place}</p>
                        <p><button onClick={() => dispatch(deleteItem({id:item.id}))}>delete</button></p>

                </div>))
            }

  
        
        </div>;
}
 
export default ToDoList;