export type Presentation = {
	"Intro Title": string;
	"Intro Subtitle": string;
	arr_sildes: PresentationArr_sildes[];
}
export type PresentationArr_sildes = {
	id: string;
	Heading: string;
	Content: string[];
}
