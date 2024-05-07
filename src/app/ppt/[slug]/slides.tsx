'use client'

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {useEffect, useState} from "react";

export default function SlidesPage() {
    const [api, setApi] = useState<CarouselApi>()
    useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            // Do something on select.
        })
    }, [api])

    return (
        <section className={"h-screen w-full bg-red-100 min-w-full flex flex-col justify-center items-center"}>
            <Carousel className={"bg-red-100 w-fit"}>
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                    <CarouselItem>...</CarouselItem>
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </section>
    )
}
