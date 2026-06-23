import React, { useState } from "react";
import CanvasEditor from "./CanvasEditor.tsx";

export default function ImageUploader(){
    const [image, setImage] = useState<string | null>(null)
    const [rotation, setRotation] = useState(0);
    

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

            <CanvasEditor image={image} rotation={rotation}/>
        </div>
    )
};