import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ISeminar } from "@/api/seminar-service-types";
import { useCallback, useState } from "react";
import { MyInput } from "./MyInput";
import { ImageLinkPreview } from "./ImageLinkPreview";
import { useSeminarsContext } from "@/seminarContext";

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
    const [newDate, setNewDate] = useState(date);
    const [photoLink, setPhotoLink] = useState<string | null>(photo);
    const [newTime, setNewTime] = useState(time);

    const { updateSeminar } = useSeminarsContext();
    const updateField = useCallback((data: Partial<ISeminar>) => {
        updateSeminar(cardId, data);
    }, [cardId, updateSeminar])
    return (
        <Dialog modal={true}>
            <DialogTrigger>
                <Button
                    className="hover:bg-neutral-400" variant="ghost"
                >
                    <Pencil />
                </Button>
            </DialogTrigger>
            <DialogContent className="scroll-auto">
                <DialogHeader>
                    <DialogTitle>Изменить данные семинара</DialogTitle>
                    <div className="flex flex-col">
                        <MyInput id="new-title" setVal={setNewTitle} val={newTitle} keyProp="title" onConfirm={updateField}>
                            Название семинара:
                        </MyInput>
                        <MyInput id="new-desc" setVal={setNewDesc} val={newDesc} keyProp="description" onConfirm={updateField}>
                            Описание семинара:
                        </MyInput>
                        <ImageLinkPreview link={photoLink} setLink={setPhotoLink} onConfirm={updateField} keyProp="photo" />
                        <MyInput id="new-date" setVal={setNewDate} val={newDate} keyProp="date" onConfirm={updateField}>
                            Дата семинара:
                        </MyInput>
                        <MyInput id="new-time" setVal={setNewTime} val={newTime} keyProp="time" onConfirm={updateField}>
                            Время семинара:
                        </MyInput>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}