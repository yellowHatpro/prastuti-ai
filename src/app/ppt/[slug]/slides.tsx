"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PresentationArr_slides } from "@/app/types/presentation";

export default function SlidesPage({
  slides,
}: {
  slides: PresentationArr_slides[];
}) {
  return (
    <section className="w-full h-fit max-w-[1200px] max-h-[800px] flex flex-col justify-center items-center">
      <Carousel className="w-full h-full m-2 border border-black rounded-md p-10 bg-gradient-to-r from-amber-200 to-yellow-400">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <h2
                  className={
                    "text-4xl font-extrabold tracking-tight border-b border-black pb-2"
                  }
                >
                  {slide.Heading}
                </h2>
                <ul className={"list-disc [&>li]:m-8"}>
                  {slide.Content.map((content, index) => {
                    return (
                      <li className={"text-3xl"} key={index}>
                        {content}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
