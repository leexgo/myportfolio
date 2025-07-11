import "tailwindcss";
import Skills from "./components/Skills";
import Introducing from "./components/Introducing";
import CustomFrame from "./components/CustomFrame";
import Testintro from "./components/Testintro";




export default function Home() {
  return (
    <>
      <main className="min-h-screen  bg-amber-900 text-white p-6 flex flex-col justify-center items-center">
        <Testintro />
        <section className="min-h-screen max-w-xl flex flex-col justify-center items-center">
          <Skills />
        </section>
      </main>
    </>
  )
}
