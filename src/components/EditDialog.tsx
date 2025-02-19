import { Pencil } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { ISeminar } from "@/api/seminar-service-types";
import { useState } from "react";
import { MyInput } from "./MyInput";
import { ImageLinkPreview } from "./ImageLinkPreview";

export function EditDialog({
    date,
    description,
    photo,
    time,
    title,
}: ISeminar) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDesc, setNewDesc] = useState(description);
    const [newDate, setNewDate] = useState(date);
    const [photoLink, setPhotoLink] = useState<string | null>(photo);
    const [newTime, setNewTime] = useState(time);

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
                        <MyInput id="new-title" setVal={setNewTitle} val={newTitle} onConfirm={() => { }}>
                            Название семинара:
                        </MyInput>
                        <MyInput id="new-desc" setVal={setNewDesc} val={newDesc} onConfirm={() => { }}>
                            Описание семинара:
                        </MyInput>
                        <ImageLinkPreview link={photoLink} setLink={setPhotoLink} onConfirm={() => { }} />
                        <MyInput id="new-date" setVal={setNewDate} val={newDate} onConfirm={() => { }}>
                            Дата семинара:
                        </MyInput>
                        <MyInput id="new-time" setVal={setNewTime} val={newTime} onConfirm={() => { }}>
                            Время семинара:
                        </MyInput>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}