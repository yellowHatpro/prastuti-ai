import SlidesPage from "@/app/ppt/[slug]/slides";
import {promises as fs} from "fs";
import {Presentation} from "@/app/types/presentation";

type PptParams = {
    params: {slug: string}
}
export default async function PptPage({params}: PptParams) {
    const file = await fs.readFile(process.cwd() + "/src/app/data/data.json", "utf-8")
    const data: Presentation = JSON.parse(file) as Presentation
    const slides = data.arr_sildes
    return (
        <section className={"h-screen w-full min-w-full flex flex-col justify-center items-center"}>
            {decodeURIComponent(params.slug)}
            <SlidesPage slides={slides}/>
        </section>
    )
}
