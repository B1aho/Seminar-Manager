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
import { Label } from "./ui/label";

interface IDateInputProps {
    currDate: string;
    setCurrDate: (val: string) => void;
    keyProp?: Keys;
    onConfirm?: (data: Partial<ISeminar>) => void
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
        <div className="my-2">
            <Popover>
                <PopoverTrigger asChild>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col min-w-[100px] w-[45%]">
                            <Label className="mb-1" htmlFor='btn-input'>Выбор даты</Label>
                            <Button
                                id='btn-input'
                                variant={"outline"}
                                className="w-full pl-3 text-left font-normal"
                            >
                                {
                                    currDate
                                        ? formattedDate
                                        : <span>Выбрать дату</span>
                                }
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </div>
                        {(onConfirm && keyProp) &&
                            <Button onPointerUp={(e) => { e.preventDefault(); onConfirm({ [keyProp]: formattedDate }) }}>
                                <Check />
                                <span>Изменить</span>
                            </Button>}
                    </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        onSelect={setCurrDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
}


export function convertMMDDToDDMM(dateStr: string) {
    const parts = dateStr.trim().split('.');

    // Меняем местами месяц и день
    return `${parts[1]}.${parts[0]}.${parts[2]}`;
}