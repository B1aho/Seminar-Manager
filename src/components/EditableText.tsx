import { RefObject } from "react"

interface IEditableTextProps {
    defaultContent: string;
    passRef: RefObject<HTMLDivElement | null>;
}

export function EditableText({ defaultContent, passRef }: IEditableTextProps) {
    return (
        <div
            className="h-full text-ellipsis overflow-hidden"
            contentEditable={true}
            ref={passRef}
        >
            {defaultContent}
        </div>
    )
}