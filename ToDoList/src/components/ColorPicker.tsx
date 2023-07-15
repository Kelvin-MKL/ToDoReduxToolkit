import { SketchPicker } from "react-color";
import { useRef, useState } from "react";
import  ColorList  from "./ColorList"
import { useAppDispatch } from "../store/store"; 
import { addColor } from "../store/slices/colorSlice"


export interface Color {
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

    const checkbox = useRef<HTMLInputElement>(null);

    const handleLoadColor = (color: Color) => {
        setSketchPickerColor(color)
    }

    const getRandomInt = (max: number) => {
        return Math.round(1 + Math.random() * (max - 1));
    }

    const getRandomColor = () => {
        let r = getRandomInt(255);
        let g = getRandomInt(255);
        let b = getRandomInt(255);
        let a: number;

        if (checkbox.current?.checked) a = getRandomInt(100)/100; else a = 100;
        
        handleLoadColor({r, g, b, a: a}) 
        dispatch(addColor({r, g, b, a: a}))
    }

    return ( 
        <>
        <p>THis is color picker</p>
        <div className="sketchpicker" style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>        
            <SketchPicker onChange={ color => {setSketchPickerColor(color.rgb)}} color={sketchPickerColor}></SketchPicker>
            <ColorList handleLoad={handleLoadColor}></ColorList>
        </div>
        <div  style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>
            <button style={{background: `rgba(${r},${g},${b},${a})`, border: "none", boxShadow: "2px 2px", cursor: "pointer"}} onClick={() => dispatch(addColor({r:r, g:g, b:b, a: a}))}>ADD</button>
            <div>
                <label htmlFor="transparent">
                    Transparent?
                    <input style={{ marginRight: "10px"}} type="checkbox" id="transparent" name="transparent" ref={checkbox}  />  
                </label>
                
                <button style={{cursor: "pointer", border: "none"}} onClick={getRandomColor}>Random</button>
            </div>
        </div>

        </>
     );
}
 
export default ColorPicker;