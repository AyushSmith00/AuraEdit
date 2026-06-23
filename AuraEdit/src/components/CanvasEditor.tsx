import { useEffect, useRef } from "react";

type canvasEditorprops = {
    image: string | null;
};



export default function CanvasEditor({image}: canvasEditorprops){

    const canvasref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {

        if(!image) return;

        const canvas = canvasref.current

        if(!canvas) return;

        const ctx = canvas.getContext("2d")

        if(!ctx) return;

        const img = new Image();

        img.src = image;

        img.onload = () => {
            canvas.width = img.width
            canvas.height = img.height;

            ctx.drawImage(img ,0 ,0);
        }

    }, [image])

    return(
        <canvas
            ref={canvasref}
            style={{border: "1px solid black", maxWidth: "100%"}}
        />
    )
}