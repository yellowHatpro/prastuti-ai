"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PresentationArr_slides } from "@/app/types/presentation";
import pptxgen from "pptxgenjs";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function SlidesPage({
  slides,
}: {
  slides: PresentationArr_slides[];
}) {
  const handleDownloadPPT = async () => {
    const pptx = new pptxgen();

    pptx.layout = "LAYOUT_16x9";
    pptx.theme = {
      headFontFace: "Arial",
      bodyFontFace: "Arial",
    };

    const titleSlide = pptx.addSlide();
    titleSlide.background = { color: "#FEF3C7" };
    titleSlide.addText("Presentation", {
      x: 1,
      y: 2,
      w: "80%",
      h: 1,
      fontSize: 44,
      color: "000000",
      bold: true,
      align: "center",
      valign: "middle",
    });

    slides.forEach((slide) => {
      const contentSlide = pptx.addSlide();
      contentSlide.background = { color: "#FEF3C7" };

      contentSlide.addText(slide.Heading, {
        x: 0.5,
        y: 0.5,
        w: "90%",
        h: 1,
        fontSize: 32,
        color: "000000",
        bold: true,
      });

      const contentText = slide.Content.map(
        (point, index) => `${index + 1}. ${point}`
      ).join("\n");
      contentSlide.addText(contentText, {
        x: 1,
        y: 2,
        w: "80%",
        h: 4,
        fontSize: 20,
        color: "000000",
        valign: "top",
      });
    });

    await pptx.writeFile({ fileName: "presentation.pptx" });
  };

  return (
    <section className="w-full h-fit max-w-[1200px] max-h-[800px] flex flex-col justify-center items-center">
      <div className="w-full flex justify-end mb-4">
        <Button
          onClick={handleDownloadPPT}
          className="bg-amber-500 hover:bg-amber-600 text-black"
        >
          <Download className="mr-2 h-4 w-4" />
          Download PPT
        </Button>
      </div>
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
