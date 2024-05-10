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
            <Carousel className="w-full max-w-[1000px] border rounded-md p-4">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <h2 className={"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"}>
                                    {slide.Heading}
                                </h2>
                                <ul className={"my-6 ml-6 list-disc [&>li]:mt-2"}>
                                    {slide.Content.map((content, index) => {
                                        return (
                                            <li key={index}>
                                                {content}
                                            </li>
                                        )
                                    })}
                                </ul>
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
