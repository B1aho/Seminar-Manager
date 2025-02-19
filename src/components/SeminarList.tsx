import { ISeminar } from "@/api/seminar-service-types"
import { useState } from "react";
import { SeminarCard } from "./SeminarCard";
import { AddCard } from "./AddCard";

interface ISeminarListProps {
    seminars: Promise<ISeminar[] | undefined>,
    isLoading: boolean,
    error: Error | null,
}

export function SeminarList({ seminars, isLoading, error }: ISeminarListProps) {
    const [seminarsData, setSeminarsData] = useState<ISeminar[] | undefined>();

    let content = null;
    if (error) {
        content = <div>Error</div> // Lottie с ошибкой
    }

    if (isLoading) {
        content = <div>Loading..</div> // Lottie с loading
    }

    if (seminars) {
        seminars.then((res) => setSeminarsData(res))
    }

    if (seminarsData) {
        console.log(seminarsData)
        content = seminarsData.map(sem => {
            return <SeminarCard {...sem} />
        })
        content.push(<AddCard />)
    }

    return (
        <div className="grid grid-cols-3 gap-3">
            {content}
        </div>
    )
}