import { ISeminar } from "@/api/seminar-service-types";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function SeminarCard({
    date,
    description,
    id,
    photo,
    time,
    title,
}: ISeminar) {
    return (
        <Card key={id}>
            <CardHeader className="h-[25%]">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <img src={photo} className="rounded-lg" />
            </CardContent>
            <CardFooter>
                <p>{date}</p>
                <p>{time}</p>
            </CardFooter>
        </Card>
    );
}