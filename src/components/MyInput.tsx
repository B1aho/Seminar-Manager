import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Check } from "lucide-react";

interface IMyInput {
    id: string;
    val: string;
    setVal: (newVal: string) => void;
    children: string;
    onConfirm: () => void
}

export function MyInput({ id, val, setVal, children, onConfirm }: IMyInput) {
    return (
        <div className="flex justify-between items-center outline-black outline-1">
            <div className="flex flex-col">
                <Label htmlFor={id}>{children}</Label>
                <Input value={val} onInput={(e) => setVal(e.currentTarget.value)} id={id} />
            </div>
            <Button onPointerUp={() => onConfirm()}>
                <Check />
                <span>Изменить</span>
            </Button>
        </div>
    )
}