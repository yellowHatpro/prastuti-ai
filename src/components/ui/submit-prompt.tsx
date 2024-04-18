import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const SubmitPrompt = ({className}: {className:string}) => {
  return (
      <section className={cn("z-10 w-full flex flex-col",className)}>
          <h1 className={"font-medium text-[#1e1e2e]"}>
              Write a topic on which you want to generate a PPT
          </h1>
       <div className={"flex flex-row w-full items-center"}>
           <Textarea
               className={"mr-2 my-2 border-[#1e1e2e]"}
               placeholder={"Enter your prompt"}/>
           <Button className={"bg-[#1e1e2e] border-[#a7a9f7] hover:bg-[#5d8ff0]"}>
               Submit
           </Button>
       </div>
      </section>
  )
}
export default SubmitPrompt
