'use client'

import {
    Carousel,
    CarouselContent, CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {PresentationArr_slides} from "@/app/types/presentation";
import {Margin, usePDF} from "react-to-pdf";
import {Button} from "@/components/ui/button";
import {DownloadIcon} from "@radix-ui/react-icons";

export default function SlidesPage({slides}: {slides: PresentationArr_slides[]}) {
    const { toPDF, targetRef } = usePDF({
        method: "save",
        filename: `prastuti.pdf`,
        page: { margin: Margin.LARGE },
    });

    return (
        <section className={"h-full w-full min-w-full flex flex-col justify-center items-center"}>
            <Button className={"bg-red-100"} onClick={()=>toPDF}>
                Download PDF
            </Button>
            <Carousel ref={targetRef} className="w-[1400px] m-2 max-w-[1400px] border border-black rounded-md p-4">
                <CarouselContent >
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <h2 className={"scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0"}>
                                    {slide.Heading}
                                </h2>
                                <ul className={"my-6 ml-6 list-disc [&>li]:m-12"}>
                                    {slide.Content.map((content, index) => {
                                        return (
                                            <li className={"text-3xl"} key={index}>
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
