'use client'

import {
    Carousel,
    CarouselContent, CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {PresentationArr_sildes} from "@/app/types/presentation";

export default function SlidesPage({slides}: {slides: PresentationArr_sildes[]}) {
    return (
        <section className={"h-screen w-full min-w-full flex flex-col justify-center items-center"}>
            <Carousel className="w-full max-w-[1000px]">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                {slide.Heading}
                                {slide.Content.map((content, index) => {
                                    return (
                                        <div key={index}>
                                            {content}
                                        </div>
                                    )
                                })}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </section>
    )
}
