import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { SquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useRef, useState } from "react";
import { EditableText } from "./EditableText";
import { ImageLinkPreview } from "./ImageLinkPreview";
import { ISeminar, URLString } from "@/api/seminar-service-types";
import { useSeminarsContext } from "@/seminarContext";

const DEFAULT_TITLE = "Название семинара";
const DEFAULT_DESC = "Добавь описание";

export function AddCard() {
    const { addSeminar } = useSeminarsContext();
    const [keyTitle, setKeyTitle] = useState('1t');
    const [keyDesc, setKeyDesc] = useState('1d');
    const [link, setLink] = useState<URLString | string>('http://');
    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    const setDefaultValues = useCallback(() => {
        setKeyTitle(prev => (prev === '1t' ? '2t' : '1t'));
        setKeyDesc(prev => (prev === '1d' ? '2d' : '1d'));
    }, [])
    const postNewSeminar = useCallback(async () => {
        const seminar: Omit<ISeminar, 'id'> = {
            title: titleRef.current?.innerText || 'Название',
            description: descRef.current?.innerText || 'Описание',
            photo: link,
            date: '01.01.2025',
            time: '00:00',
        }
        addSeminar(seminar)
    }, [addSeminar, link])
    return (
        <Card key='123-last' className="flex flex-col justify-between h-[600px] max-h-full">
            <CardHeader className="">
                <CardTitle>
                    <EditableText
                        passRef={titleRef}
                        key={keyTitle}
                        defaultContent={DEFAULT_TITLE} />
                </CardTitle>
                <CardDescription>
                    <EditableText
                        passRef={descRef}
                        key={keyDesc}
                        defaultContent={DEFAULT_DESC} />
                </CardDescription>
            </CardHeader>
            <CardContent className="">
                <ImageLinkPreview link={link} setLink={setLink} />
            </CardContent>
            <CardFooter>
                <Button onPointerUp={setDefaultValues}>Начальный текст</Button>
                <Button onPointerUp={() => postNewSeminar()}><SquarePlus /><span>Добавить семинар</span></Button>
            </CardFooter>
        </Card>
    );
}