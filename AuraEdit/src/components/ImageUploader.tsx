import React, { useState } from "react";
import CanvasEditor from "./CanvasEditor.tsx";

export default function ImageUploader(){
    const [image, setImage] = useState<string | null>(null)
    const [rotation, setRotation] = useState(0);
    const [flipX, setFlipX] = useState(false);
    const [flipY, setFlipY] = useState(false)
    const [brightness, setBrightness] = useState(100)

    const handleImageUploader = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        const imageUrl = URL.createObjectURL(file)
        setImage(imageUrl)
    }


    return(
        <div>
            <input 
                type="file"
                accept="image/*"
                onChange={handleImageUploader}
            />

            <button onClick={() => setRotation((prev) => prev - 90)}>rotate left</button>
            <button onClick={() => setRotation((prev) => prev + 90)}>rotate right</button>
            <button onClick={() => setFlipX((prev) => !prev)}>Flip Horizontal</button>
            <button onClick={() => setFlipY((prev) => !prev)}>Flip Virtical</button>

            <br />
            <br />

            <label>Brightness: {brightness}</label>

            <br />

            <input 
                type="range" 
                min="0"
                max="100"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
            />

            <CanvasEditor image={image} rotation={rotation} flipX={flipX} flipY={flipY} brightness={brightness}/>
        </div>
    )
};