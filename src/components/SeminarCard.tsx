import { ISeminar } from "@/api/seminar-service-types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { EditDialog } from "./EditDialog";
import { RemoveDialog } from "./RemoveDialog";
import { Calendar, Clock } from "lucide-react";
import { ImageSeminar } from "./ImageSeminar";

export function SeminarCard({
    date,
    description,
    id,
    photo,
    time,
    title,
}: ISeminar) {
    return (
        <Card key={id} className="w-full select-none hover:scale-105 transition-all ease-in-out duration-500">
            <CardHeader >
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <ImageSeminar link={photo} />
                <div className="flex mt-1 justify-between items-center">
                    <p className="font-semibold flex gap-1 items-center">
                        <span><Calendar size={15} /></span>
                        <span>Дата семинара</span>
                    </p>
                    <p className="font-semibold">{date}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p className="font-semibold flex gap-1 items-center">
                        <span><Clock size={15} /></span>
                        <span>Время</span>
                    </p>
                    <p className="font-semibold">{time}</p>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex gap-3">
                    <EditDialog id={id} date={date} description={description} cardId={id} photo={photo} time={time} title={title} />
                    <RemoveDialog cardId={id} />
                </div>
            </CardFooter>
        </Card>
    );
}