import SlidesPage from "@/app/ppt/[slug]/slides";
import {Presentation} from "@/app/types/presentation";
import {fetchSampleData} from "@/app/api/fetchSampleData";

type PptParams = {
    params: {slug: string}
}
export default async function PptPage({params}: PptParams) {
    const data: Presentation = await fetchSampleData(decodeURIComponent(params.slug))
    const slides = data.arr_slides
    return (
        <section className={"h-screen w-full min-w-full flex flex-col justify-center items-center"}>
            <SlidesPage slides={slides}/>
        </section>
    )
}
