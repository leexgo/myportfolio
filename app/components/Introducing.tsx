import Link from 'next/link'
import CustomFrame from './CustomFrame';

const Introducing = () => { 
    return (
        <>
        <section className='flex flex-row justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            Olá, eu sou <span className="text-cyan-400 border-b-blackk text-shadow-lg">Alex Gomes</span>
          </h1>
          <p className="text-lg sm:text-xl max-w-xl text-center mb-8 text-shadow-lg">
            Desenvolvedor Front-end com experiência em React, Next.js, TypeScript e apaixonado por criar interfaces modernas e acessíveis. Facilidade de trabalho com equipes UX/UI, aplico metodologias ágeis e valorizo o conceito mobile first.
          </p>
        </div>
       

        </section>
        <div className="flex gap-4">
          <Link href="/contact" className="border border-cyan-500 px-6 py-2 rounded-xl font-medium hover:bg-cyan-500 hover:text-white">
            Contato
          </Link>
        </div>
        </>
    );
}

export default Introducing;