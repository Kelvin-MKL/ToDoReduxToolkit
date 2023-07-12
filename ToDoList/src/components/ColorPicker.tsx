import { SketchPicker, BlockPicker } from "react-color";
import { useState } from "react";

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

    const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

    return ( 
        <>
        <p>THis is color picker</p>
        <div className="sketchpicker" style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>        
            <SketchPicker onChange={ color => {setSketchPickerColor(color.rgb)}} color={sketchPickerColor}></SketchPicker>
            <BlockPicker></BlockPicker>
        </div>
        <div className="sketchpicker" style={{display: "flex", padding: "40px", justifyContent: "space-around"}}>
            <div style={{background: `rgba(${r},${g},${b},${a})`, width: 100, height: 50}}></div>
            <div style={{background: `rgba(${r},${g},${b},${a})`, width: 100, height: 50}}></div>
        </div>
        </>
     );
}
 
export default ColorPicker;