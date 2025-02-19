import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { LoaderCircle, OctagonAlert, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useCallback } from "react";
import { useSeminarsContext } from "@/seminarContext";

interface IRemoveDialogProps {
    cardId: number;
}

export function RemoveDialog({ cardId }: IRemoveDialogProps) {
    const { removeSeminar, loading } = useSeminarsContext();
    const remove = useCallback(() => {
        removeSeminar(cardId);
    }, [cardId, removeSeminar])
    return (
        <Dialog modal={true}>
            <DialogTrigger>
                <Button
                    className="hover:bg-red-400 border-x-[1px] border-y-[1px]" variant="ghost"
                >
                    <Trash />
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Удалить семинар?</DialogTitle>
                    <DialogDescription>
                        Данное действие нельзя будет отменить! Подтвердите удаление
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button onPointerUp={(e) => { e.preventDefault(); remove() }} variant="destructive">
                        {!loading ? <OctagonAlert /> : <LoaderCircle className="animate-spin " />}
                        <span>Удалить</span>
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}