import SlidesPage from "@/app/ppt/[slug]/slides";
import {promises as fs} from "fs";
import {Presentation} from "@/app/types/presentation";
import {fetchSampleData} from "@/app/api/fetchSampleData";

type PptParams = {
    params: {slug: string}
}
export default async function PptPage({params}: PptParams) {
    const data: Presentation = await fetchSampleData()
    const slides = data.arr_sildes
    return (
        <section className={"h-screen w-full min-w-full flex flex-col justify-center items-center"}>
            {/*{decodeURIComponent(params.slug)}*/}
            <SlidesPage slides={slides}/>
        </section>
    )
}
