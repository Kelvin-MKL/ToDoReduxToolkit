import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteItem } from "../store/slices/itemSlice";

const ToDoList = () => {
    const items = useAppSelector((state) => state.item.items);
    const dispatch = useAppDispatch();

    return <div> 

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    
                    <th>Name</th>
                </tr>
            </thead>
        <tbody>
            {items.map((item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td><button onClick={() => dispatch(deleteItem({id:item.id}))}>delete</button></td>
            </tr>))}

        </tbody>

        </table>
        
        </div>;
}
 
export default ToDoList;