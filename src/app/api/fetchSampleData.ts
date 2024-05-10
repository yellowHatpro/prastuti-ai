import {promises as fs} from "fs";
import {Presentation} from "@/app/types/presentation";

export const fetchSampleData = async (prompt: string) => {
    const requestOptions = {
        method: 'POST',
        body: JSON.stringify({
            "prompt": prompt
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    await fetch("http://localhost:5000/create-ppt", requestOptions)
    const file = await fs.readFile(process.cwd() + "/src/app/data/data.json", "utf-8")
    return JSON.parse(file) as Presentation
}
