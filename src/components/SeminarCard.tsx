import { ISeminar } from "@/api/seminar-service-types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Pencil, Trash2 } from "lucide-react";

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
                    <p>Во сколько?</p>
                    <p>{time}</p>
                </div>
            </CardContent>
            <CardFooter>
                <div className="flex gap-3">
                    <Button className="hover:bg-neutral-400 min-w-4" variant="ghost"><Pencil /></Button>
                    <Button className="hover:bg-red-500" variant="ghost"><Trash2 /></Button>
                </div>
            </CardFooter>
        </Card>
    );
}