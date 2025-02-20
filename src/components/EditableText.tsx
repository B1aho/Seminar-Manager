import { RefObject } from "react"

interface IEditableTextProps {
    defaultContent: string;
    passRef: RefObject<HTMLDivElement | null>;
}

export function EditableText({ defaultContent, passRef }: IEditableTextProps) {
    return (
        <div
            className="h-full py-1 text-ellipsis overflow-hidden"
            contentEditable={true}
            ref={passRef}
        >
            {defaultContent}
        </div>
    )
}