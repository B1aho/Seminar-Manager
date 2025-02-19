import { IResponse } from "@/api/seminar-service-types"

interface ISeminarListProps {
    seminars: Promise<IResponse> | undefined,
    isLoading: boolean,
    error: Error,
}

export function SeminarList({ seminars, isLoading, error }: ISeminarListProps) {
    return (
        <div></div>
    )
}