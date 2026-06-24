import { useEffect, useRef } from "react";

type canvasEditorprops = {
    image: string | null;
    rotation: number;
    flipX: boolean;
    flipY: boolean;
    brightness: number;
};



export default function CanvasEditor({image, rotation, flipX, flipY, brightness}: canvasEditorprops){

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

            const radians = (rotation * Math.PI) / 180;

            canvas.width = img.width
            canvas.height = img.height;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.save();

            ctx.filter = `brightness(${brightness}%)`

            ctx.translate(canvas.width/2, canvas.height/2)

            ctx.scale(flipX ? -1 : 1, flipY ? 1 : -1);

            ctx.rotate(radians);

            ctx.drawImage(img, -img.width/2, -img.height/2);

            ctx.restore();
        }

    }, [image, rotation, flipX, flipY, brightness])

    return(
        <canvas
            ref={canvasref}
            style={{border: "1px solid black", maxWidth: "100%"}}
        />
    )
}