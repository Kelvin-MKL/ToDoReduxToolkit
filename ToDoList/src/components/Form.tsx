import { useRef } from "react";
import { useAppDispatch } from "../store/store"; 
import { addItem } from "../store/slices/itemSlice";

const Add = () => {
    const name = useRef<string>("");
    const dispatch = useAppDispatch();
    
    return (
        <div>
        <form className="form" onSubmit={e => e.preventDefault()}>
        <label htmlFor="">Item Name:</label>
        <input className="input" type="text" onChange={(e) => name.current = e.target.value}/>
        <button onClick={ () => dispatch(addItem({name:name.current}))}>Add</button>
    </form>
    </div>
    )
}
 
export default Add;