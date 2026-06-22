import { useState } from "react";

export default function ImageUploader(){
    const [image, setImage] = useState<string | null>(null)

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

            {image && (
                <img>
                    src={image}
                    alt="preview"
                    width={400}
                </img>
            )}
        </div>
    )
};