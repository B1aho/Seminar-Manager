import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
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
        <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 600: 2, 1000: 3 }}
            gutterBreakPoints={{ 0: "10px", 600: "13px", 1000: "14px" }}
        >
            <Masonry>
                {content}
            </Masonry>
        </ResponsiveMasonry>
    )
}