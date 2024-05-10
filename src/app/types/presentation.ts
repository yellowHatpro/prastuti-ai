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
