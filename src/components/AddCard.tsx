import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { ListRestart, SquarePlus } from "lucide-react";
import { Button } from "./ui/button";
import { useCallback, useRef, useState } from "react";
import { EditableText } from "./EditableText";
import { ImageLinkPreview } from "./ImageLinkPreview";
import { ISeminar, URLString } from "@/api/seminar-service-types";
import { useSeminarsContext } from "@/seminarContext";
import { formatTimeToHHMM, parseHHMMToDate } from "./time-picker/time-picker-utils";
import { DateInput } from "./DateInput";
import { intlFormat } from "date-fns";
import { TimePicker } from "./time-picker/TimePicker";

const DEFAULT_TITLE = "Название семинара";
const DEFAULT_DESC = "Добавь описание";

export function AddCard() {
    const { addSeminar } = useSeminarsContext();
    const [keyTitle, setKeyTitle] = useState('1t');
    const [keyDesc, setKeyDesc] = useState('1d');
    const [link, setLink] = useState<URLString | string>('https://');
    const [newDate, setNewDate] = useState('01.03.2025');
    const [timeD, setTimeD] = useState<Date>(parseHHMMToDate('12:00'));

    const titleRef = useRef<HTMLDivElement>(null);
    const descRef = useRef<HTMLDivElement>(null);

    const setDefaultValues = useCallback(() => {
        setKeyTitle(prev => (prev === '1t' ? '2t' : '1t'));
        setKeyDesc(prev => (prev === '1d' ? '2d' : '1d'));
        setTimeD(parseHHMMToDate('12:00'));
        setLink('https://');
        setNewDate('01.03.2025');
    }, [])
    const postNewSeminar = useCallback(async () => {
        const seminar: Omit<ISeminar, 'id'> = {
            title: titleRef.current?.innerText || 'Название',
            description: descRef.current?.innerText || 'Описание',
            photo: link,
            date: intlFormat(newDate, {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }, {
                locale: 'ru-RU'
            }),
            time: formatTimeToHHMM(timeD),
        }
        addSeminar(seminar)
    }, [addSeminar, link, newDate, timeD])
    return (
        <Card key='123-last' className="flex flex-col justify-between w-full min-h-[570px] max-h-[1000px]">
            <CardHeader className="flex flex-col">
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
            <CardContent className="flex flex-col gap-10">
                <ImageLinkPreview link={link} setLink={setLink} />
                <div className="flex justify-between items-center">
                    <DateInput currDate={newDate} setCurrDate={setNewDate} />
                    <TimePicker date={timeD} setDate={setTimeD} />
                </div>
            </CardContent>
            <CardFooter className="flex gap-3 justify-center items-center">
                <Button onPointerUp={setDefaultValues}>
                    <ListRestart />
                    <span>Сбросить</span>
                </Button>
                <Button onPointerUp={() => postNewSeminar()}>
                    <SquarePlus />
                    <span>Добавить</span>
                </Button>
            </CardFooter>
        </Card>
    );
}