import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SquarePlus } from "lucide-react";

export function AddCard() {
    return (
        <Card key='123-last'>
            <CardHeader className="">
                <CardTitle>Название семинара</CardTitle>
                <CardDescription>Описание</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
            <CardFooter>
                <SquarePlus />
            </CardFooter>
        </Card>
    );
}