'use client'

import {
    Carousel,
    CarouselApi,
    CarouselContent, CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {useEffect, useState} from "react";
import {Presentation, PresentationArr_sildes} from "@/app/types/presentation";

export default function SlidesPage({slides}: {slides: PresentationArr_sildes[]}) {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <section className={"h-screen w-full min-w-full flex flex-col justify-center items-center"}>
            <Carousel setApi={setApi} className="w-full max-w-[1000px]">
                <CarouselContent>
                    { slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                {slide.Heading}
                                {slide.Content.map((content, idx)=> {
                                    return(
                                        <>
                                            <div>
                                                {content}
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
