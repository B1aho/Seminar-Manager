import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { ISeminar, Keys } from "@/api/seminar-service-types";
import { TimePicker } from "./time-picker/TimePicker";

interface IMyInput {
    id: string;
    val?: string;
    keyProp: Keys;
    setVal?: (newVal: string) => void;
    time?: Date | undefined;
    setTime?: (val: Date | undefined) => void;
    children: string;
    onConfirm: (data: Partial<ISeminar>) => void
}

export function MyInput({ id, val, setVal, children, onConfirm, keyProp, time, setTime }: IMyInput) {
    return (
        <div className="flex justify-between items-center outline-black outline-1 mb-2">
            <div className="flex flex-col w-[45%]">
                <Label className="mb-1" htmlFor={id}>{children}</Label>
                {!setTime
                    ? <Input value={val} onInput={(e) => setVal && setVal(e.currentTarget.value)} id={id} />
                    : <TimePicker date={time} setDate={setTime} />
                }
            </div>
            <Button onPointerUp={() => { onConfirm({ [keyProp]: !time ? val : time }) }}>
                <Check />
                <span>Изменить</span>
            </Button>
        </div>
    )
}