import "tailwindcss";
import Skills from "./components/Skills";
import Introducing from "./components/Introducing";
import CustomFrame from "./components/CustomFrame";




export default function Home() {
  return (
    <>
      <main className="min-h-screen  bg-amber-900 text-white p-6 flex flex-col justify-center items-center">
        <CustomFrame />
        <Introducing />
        <section className="min-h-screen max-w-xl flex flex-col justify-center items-center">
          <Skills />
        </section>
      </main>
    </>
  )
}
