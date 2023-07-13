import { useAppDispatch, useAppSelector } from "../store/store";
import { deleteColor } from "../store/slices/colorSlice";




const ColorList = () => {

    const colors = useAppSelector((state) => state.color.colors);
    const dispatch = useAppDispatch();
    
    const reverseColor = colors.map(i => i).reverse();


    return <div className="color-list-wrapper"> 

            {reverseColor.map((item) => (
                <div className="color-list-item" key={item.id} >

                        {`rgb: ${item.r} ${item.g} ${item.b} a: ${item.a}`}

                        <button style={{backgroundColor: `rgba(${item.r},${item.g},${item.b},${item.a})`, border: "none", borderRadius: "10px" ,cursor: "pointer", }} 
                        onClick={() => dispatch(deleteColor({id:item.id}))}>delete</button>

                </div>))
            }

  
        
        </div>;
}
 
export default ColorList;