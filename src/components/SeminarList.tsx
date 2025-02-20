import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { SeminarCard } from "./SeminarCard";
import { AddCard } from "./AddCard";
import { useSeminarsContext } from "@/seminarContext";
import Lottie from "lottie-react";
import loadAnimation from "../lottie/load_seminars.json";

export function SeminarList() {
    const { seminars, error, loading } = useSeminarsContext();
    let content = null;
    const loader = <Lottie animationData={loadAnimation} className="mt-24 w-full" />

    if (error) {
        content = <div>Error</div> // Lottie с ошибкой
    }

    if (seminars) {
        console.log(seminars)
        content = seminars.map(sem => {
            return <SeminarCard {...sem} />
        })
        if (!loading) content.push(<AddCard />);
    }

    return (
        <>
            {loading && loader}
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 0: 1, 600: 2, 1000: 3 }}
                gutterBreakPoints={{ 0: "10px", 600: "13px", 1000: "14px" }}
            >
                <Masonry>
                    {content}
                </Masonry>
            </ResponsiveMasonry>
        </>
    )
}