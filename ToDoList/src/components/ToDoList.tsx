import { useAppSelector } from "../store/store";

const ToDoList = () => {
    const items = useAppSelector((state) => state.item.items);

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
            </tr>))}

        </tbody>

        </table>
        
        </div>;
}
 
export default ToDoList;