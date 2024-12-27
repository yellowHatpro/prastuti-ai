import { SparklesCore } from "@/components/ui/sparkles";
import SubmitPrompt from "@/components/ui/submit-prompt";

export default function Home() {
  return (
    <main className="flex min-h-screen h-screen w-full flex-col items-center justify-between p-24 text-[#1e1e2e]">
      <h1>We have an AI that creates PPT for you</h1>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center relative z-20">
        Prastuti.ai
      </h1>
      <div className={"w-[40rem] h-[1000px] relative"}>
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </div>
      <SubmitPrompt className={""} />
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background={"transparent"}
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#1d2756"
        />
      </div>
    </main>
  );
}
