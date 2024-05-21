
import { Card } from "@nextui-org/react";

export default function CardParty({
    title,
    description,
    icon,
    textButton
}) {
    return (
        <Card shadow="md" className="p-0 py-10 max-w-sm  w-full desktop:max-w-72 text-center flex items-center justify-center">
            <p className="font-semibold  text-2xl text-color03 " >
                {title}
            </p>

            <img src={`/${icon}.gif`} className="w-24 mt-6" alt={`Icono de sección fiesta - ${icon}`} />


            <span className="h-32 p-6  text-gray-400 font-medium flex justify-center items-center" >
                {description}
            </span>
            <button className="bg-color01 min-w-52 max-w-52 text-color02 py-3 rounded-3xl">
                {textButton}
            </button>
        </Card>
    );
}
