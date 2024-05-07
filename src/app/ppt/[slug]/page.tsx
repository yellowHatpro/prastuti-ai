import SlidesPage from "@/app/ppt/[slug]/slides";

type PptParams = {
    params: {slug: string}
}
export default function PptPage({params}: PptParams) {
    
    return (
        <section className={"h-screen w-full bg-red-100 min-w-full flex flex-col justify-center items-center"}>
            {decodeURIComponent(params.slug)}
            <SlidesPage/>
        </section>
    )
}
