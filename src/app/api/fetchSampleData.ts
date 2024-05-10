import {promises as fs} from "fs";
import {Presentation} from "@/app/types/presentation";

export const fetchSampleData = async () => {
    const file = await fs.readFile(process.cwd() + "/src/app/data/data.json", "utf-8")
    return JSON.parse(file) as Presentation
}
