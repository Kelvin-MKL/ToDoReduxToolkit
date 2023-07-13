import { SketchPicker } from "react-color";
import { useState } from "react";
import  ColorList  from "./ColorList"
import { useAppDispatch } from "../store/store"; 
import { addColor } from "../store/slices/colorSlice"


interface Color {
    r: number,
    g: number,
    b: number,
    a?: number | undefined
}

const ColorPicker = () => {
    const [sketchPickerColor, setSketchPickerColor] = useState<Color>({
        r: 241,
        g: 112,
        b: 1,
        a: 1
    })

    const {r, g, b, a} = sketchPickerColor;

    const dispatch = useAppDispatch();



    return ( 
        <>
        <p>THis is color picker</p>
        <div className="sketchpicker" style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>        
            <SketchPicker onChange={ color => {setSketchPickerColor(color.rgb)}} color={sketchPickerColor}></SketchPicker>
            <ColorList></ColorList>
        </div>
        <div  style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>
            <button style={{background: `rgba(${r},${g},${b},${a})`, border: "none", boxShadow: "2px 2px", cursor: "pointer"}} onClick={() => dispatch(addColor({r:r, g:g, b:b, a: a}))}>ADD</button>
            
        </div>

        </>
     );
}
 
export default ColorPicker;