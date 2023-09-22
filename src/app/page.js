import Navbar from "@/components/Navbar";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen"> 
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <Navbar />
        </div>
      </div>
      </div>
      <div className="mt-50 flex-1 bg-slate-800"><ServicesGrid/></div>      
    </main>
  );
}
