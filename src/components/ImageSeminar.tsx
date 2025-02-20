import Lottie from "lottie-react";
import noImageAnimation from "../lottie/no_photo.json";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

interface IImageSeminar {
    link: string | null;
    classes?: string;
}

export function ImageSeminar({ link, classes = " " }: IImageSeminar) {
    // Проверяем валидна ли ссылка на изображение и добавляем две анимации: 
    // на случай загрузки и на случай невалидности
    const [isValid, setIsValid] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (link === null) {
            setIsLoading(false);
            return;
        }
        let isMounted = true;
        const checkImage = async (url: string) => {
            try {
                const res: boolean = await new Promise((resolve) => {
                    const img = new Image();
                    img.onload = () => resolve(true);
                    img.onerror = () => resolve(false);
                    img.src = url;
                });

                if (isMounted) {
                    setIsValid(res);
                    setIsLoading(false);
                }
            } catch {
                if (isMounted) setIsLoading(false);
            }
        };

        setIsLoading(true);
        checkImage(link);

        return () => {
            isMounted = false;
        };
    }, [link]);

    return (
        isLoading
            ? <LoaderCircle size={70} className=" w-full flex justify-center items-center min-h-[70%] animate-spin" />
            : (isValid && link)
                ? <img src={link} alt="изображение семинара" className={"rounded-lg " + classes} />
                : <Lottie className="" animationData={noImageAnimation} />
    )
}