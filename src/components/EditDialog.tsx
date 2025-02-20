import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ISeminar } from "@/api/seminar-service-types";
import { useCallback, useState } from "react";
import { MyInput } from "./MyInput";
import { ImageLinkPreview } from "./ImageLinkPreview";
import { useSeminarsContext } from "@/seminarContext";
import { formatTimeToHHMM, parseHHMMToDate } from "./time-picker/time-picker-utils";
import { convertMMDDToDDMM, DateInput } from "./DateInput";

type EditDialogType = ISeminar & { cardId: number }

export function EditDialog({
    cardId,
    date,
    description,
    photo,
    time,
    title,
}: EditDialogType) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(description);
    const [newDate, setNewDate] = useState(convertMMDDToDDMM(date));
    const [photoLink, setPhotoLink] = useState<string | null>(photo);
    const [timeD, setTimeD] = useState<Date>(parseHHMMToDate(time));

    const { updateSeminar } = useSeminarsContext();
    const updateField = useCallback((data: Partial<ISeminar>) => {
        if (data.time)
            data.time = formatTimeToHHMM(data.time);
        updateSeminar(cardId, data);
    }, [cardId, updateSeminar])
    return (
        <Dialog modal={true}>
            <DialogTrigger>
                <Button
                    className="hover:bg-neutral-400 border-x-[1px] border-y-[1px]" variant="ghost"
                >
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent className="scroll-auto">
                <DialogHeader className="relative">
                    <DialogTitle className="font-bold">Изменить данные семинара:</DialogTitle>
                    <div className="flex flex-col py-3">
                        <MyInput id="new-title" setVal={setNewTitle} val={newTitle} keyProp="title" onConfirm={updateField}>
                            Название семинара:
                        </MyInput>
                        <MyInput id="new-desc" setVal={setNewDesc} val={newDesc} keyProp="description" onConfirm={updateField}>
                            Описание семинара:
                        </MyInput>
                        <ImageLinkPreview link={photoLink} setLink={setPhotoLink} onConfirm={updateField} keyProp="photo" />
                        <DateInput keyProp="date" onConfirm={updateField} currDate={newDate} setCurrDate={setNewDate} />
                        <MyInput id="new-time" setTime={setTimeD} time={timeD} keyProp="time" onConfirm={updateField}>
                            Время семинара:
                        </MyInput>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}