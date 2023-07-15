import { useRef } from "react";
import { useAppDispatch } from "../store/store"; 
import { addItem } from "../store/slices/itemSlice";

const Add = () => {
    const name = useRef<string>("");
    const place = useRef<string>("");
    const dispatch = useAppDispatch();
    
    return (
        <div style={{padding: "0.5rem"}}>
            <div>Memo Tag</div>
            <form className="form" onSubmit={e => e.preventDefault()}>
                <label htmlFor="">Item Name:</label>
                <input className="input" type="text" onChange={(e) => name.current = e.target.value}/>
                <label htmlFor="">Place:</label>
                <input type="text" onChange={e => place.current = e.target.value}/>
                <button onClick={ () => dispatch(addItem({name:name.current, place: place.current}))}>Add</button>
            </form>
            
        </div>
    )
}
 
export default Add;