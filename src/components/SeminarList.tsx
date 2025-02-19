import { SeminarCard } from "./SeminarCard";
import { AddCard } from "./AddCard";
import { useSeminarsContext } from "@/seminarContext";

export function SeminarList() {
    const { seminars, error, loading } = useSeminarsContext();
    let content = null;
    if (error) {
        content = <div>Error</div> // Lottie с ошибкой
    }

    if (loading) {
        content = <div>Loading..</div> // Lottie с loading
    }

    if (seminars) {
        console.log(seminars)
        content = seminars.map(sem => {
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