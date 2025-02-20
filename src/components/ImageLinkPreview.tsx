import { Check, Image } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";
import { ISeminar, Keys, URLString } from "@/api/seminar-service-types";

interface IImageLinkPreview {
    link: string | null;
    setLink: (val: URLString | string) => void;
    onConfirm?: (data: Partial<ISeminar>) => void;
    keyProp?: Keys;
}

export function ImageLinkPreview({ link, setLink, onConfirm, keyProp }: IImageLinkPreview) {
    const [isPreview, setIsPreview] = useState(false);
    return (
        !isPreview
            ? (<div className="h-full flex flex-col gap-3 justify-between items-center">
                <div className="w-[80%]">
                    <Label htmlFor="img-ling">Ссылка на изображение</Label>
                    <Input id="img-link" value={link === null ? "" : link} onInput={(e) => setLink(e.currentTarget.value !== "" ? e.currentTarget.value : 'https://')} />
                </div>
                <Button className="" onPointerUp={() => setIsPreview(true)}><Image /><span>Предпросмотр</span></Button>
            </div>)
            : (<div className="p-2 flex flex-col justify-between items-center">
                <img src={link ? link : undefined} alt="изображение семинара" className={"rounded-lg mb-2 " + (onConfirm ? " max-w-60" : " ")} />
                <div className="flex flex-col gap-2 items-center">
                    <Button className="w-full" onPointerUp={() => setIsPreview(false)}>Назад</Button>
                    {(onConfirm && keyProp) && <Button className="" onPointerUp={() => onConfirm({ [keyProp]: link })}>
                        <Check />
                        <span>Изменить</span>
                    </Button>}
                </div>
            </div>)
    )
}