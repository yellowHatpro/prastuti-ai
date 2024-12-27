import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const createPPT = async (prompt: string) => {
  const response = await groq.chat.completions.create({
    model: "llama3-8b-8192",
    messages: [
      {
        role: "system",
        content: `Create a content for 10 slides in JSON format such that first key is the intro title of the ppt and second key is subtitle text for title and further each slide is a key and each key is numbered like slide1, slide2 and for each slide we would have one value and this value would be a dict whose first key would be a heading and second key would be detailed content whose value would be an array with 5 elements corresponding to its 30 worded detailed content . the source is ${prompt} information across the web. Make sure we have a content for 10 slide.
        Also do format the output in correctJSON format, including ',' after each key so that the response matches this TypeScript schema:
        export type Presentation = {
            "Intro Title": string;
            "Intro Subtitle": string;
            arr_slides: PresentationArr_slides[];
        }
        export type PresentationArr_slides = {
            id: string;
            Heading: string;
            Content: string[];
        }

        Hence, the output should look like this in json:
        {
            "Intro Title": "...",
            "Intro Subtitle": "...",
            "arr_slides": [
                {
                    "id": "...",
                    "Heading": "...",
                    "Content": ["...", "...", "...", "...", "..."]
                },
                ...
            ],
        }
`,
      },
      { role: "user", content: prompt },
    ],
  });
  const data = response.choices[0].message.content;
  // Extract JSON from response by finding content between ```json and ``` markers
  const jsonStart = data?.indexOf("{");
  const jsonEnd = data?.lastIndexOf("}");
  const jsonContent =
    jsonStart !== undefined &&
    jsonEnd !== undefined &&
    jsonStart >= 0 &&
    jsonEnd >= 0
      ? data?.substring(jsonStart, jsonEnd + 1).trim()
      : data?.trim();
  console.log(jsonContent);
  const jsonData = jsonContent?.trim();
  console.log("jsonData", jsonData);
  return jsonData ? JSON.parse(jsonData) : null;
};
