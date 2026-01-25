import AIAssistant from "@/components/AIAssistant";

export default function Page() {
  return (
    <main className="h-[100svh] bg-black flex justify-center px-3 pt-20 overflow-hidden">
      <div className="w-full max-w-3xl h-full flex">
        <AIAssistant />
      </div>
    </main>
  );
}
