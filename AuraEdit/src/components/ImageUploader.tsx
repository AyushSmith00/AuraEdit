import React, { useState } from "react";
import CanvasEditor from "./CanvasEditor.tsx";

export default function ImageUploader(){
    const [image, setImage] = useState<string | null>(null)
    

    const handleImageUploader = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if(!file) return;

        const imageUrl = URL.createObjectURL(file)

        setImage(imageUrl)
        
    }

    const handleDownload =() =>{
        if(!image) return;

        const link = document.createElement("a")

        link.href = image;

        link.download = "edited-image.png"

        link.click()
    }

    return(
        <div>
            <input 
                type="file"
                accept="image/*"
                onChange={handleImageUploader}
            />

            <CanvasEditor image={image}/>
        </div>
    )
};