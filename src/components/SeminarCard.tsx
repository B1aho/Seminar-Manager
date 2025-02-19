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

export function SeminarCard({
    date,
    description,
    id,
    photo,
    time,
    title,
}: ISeminar) {
    return (
        <Card key={id} className="w-full">
            <CardHeader >
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={photo} className="rounded-lg" />
                <div className="flex justify-between items-center">
                    <p>Дата семинара</p>
                    <p>{date}</p>
                </div>
                <div className="flex justify-between items-center">
                    <p>Время</p>
                    <p>{time}</p>
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