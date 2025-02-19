import { Check, Image } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

interface IImageLinkPreview {
    link: string | null;
    setLink: (val: string | null) => void;
    onConfirm?: () => void;
}

export function ImageLinkPreview({ link, setLink, onConfirm }: IImageLinkPreview) {
    const [isPreview, setIsPreview] = useState(false);
    return (
        !isPreview
            ? (<div className="h-full flex justify-between items-center">
                <div>
                    <Label htmlFor="img-ling">Ссылка на изображение</Label>
                    <Input id="img-link" value={link === null ? "" : link} onInput={(e) => setLink(e.currentTarget.value !== "" ? e.currentTarget.value : null)} />
                </div>
                <Button className="" onPointerUp={() => setIsPreview(true)}><Image /><span>Предпросмотр</span></Button>
            </div>)
            : (<div className="flex justify-between items-center">
                <img src={link ? link : undefined} alt="изображение семинара" className={"rounded-lg " + (onConfirm ? " max-w-60" : " ")} />
                <div className="flex flex-col gap-4 items-center">
                    <Button className="w-full" onPointerUp={() => setIsPreview(false)}>Назад</Button>
                    {onConfirm && <Button className="" onPointerUp={() => onConfirm()}>
                        <Check />
                        <span>Изменить</span>
                    </Button>}
                </div>
            </div>)
    )
}