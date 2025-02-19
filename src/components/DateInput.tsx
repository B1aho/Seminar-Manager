import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalendarIcon, Check } from "lucide-react";
import { intlFormat } from "date-fns";
import { ISeminar, Keys } from "@/api/seminar-service-types";

interface IDateInputProps {
    currDate: string;
    setCurrDate: (val: string) => void;
    keyProp: Keys;
    onConfirm: (data: Partial<ISeminar>) => void
}

export function DateInput({ currDate, setCurrDate, keyProp, onConfirm }: IDateInputProps) {
    const formattedDate = intlFormat(currDate, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }, {
        locale: 'ru-RU'
    })
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className="w-[240px] pl-3 text-left font-normal"
                >
                    {
                        currDate
                            ? formattedDate
                            : <span>Выбрать дату</span>
                    }
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
            </PopoverTrigger>
            <Button onPointerUp={() => { onConfirm({ [keyProp]: formattedDate }) }}>
                <Check />
                <span>Изменить</span>
            </Button>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={currDate}
                    onSelect={setCurrDate}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    )
}


export function convertMMDDToDDMM(dateStr: string) {
    const parts = dateStr.trim().split('.');

    // Меняем местами месяц и день
    return `${parts[1]}.${parts[0]}.${parts[2]}`;
}