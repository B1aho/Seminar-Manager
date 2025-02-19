import { Image } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface IImageLinkPreview {
    link: string | null;
    setLink: (val: string | null) => void;
}

export function ImageLinkPreview({ link, setLink }: IImageLinkPreview) {
    const [isPreview, setIsPreview] = useState(false);
    return (
        !isPreview
            ? (<div className="h-full">
                <Label htmlFor="img-ling">Image link</Label>
                <Input id="img-link" value={link === null ? "" : link} onInput={(e) => setLink(e.currentTarget.value !== "" ? e.currentTarget.value : null)} />
                <Button onPointerUp={() => setIsPreview(true)}><Image /><span>Preview</span></Button>
            </div>)
            : (<div>
                <img src={link} alt="изображение семинара" className="rounded-lg" />
                <Button onPointerUp={() => setIsPreview(false)}>Изменить</Button>
            </div>)
    )
}