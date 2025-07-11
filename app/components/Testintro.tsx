import Link from 'next/link'
import CustomFrame from './CustomFrame';


const Introducing = () => { 
    return (
        <>
        <section className='container min-h-screen max-w-xl flex flex-col sm:flex-row justify-center items-center '>
            <CustomFrame />
            <div className=''>
                <h1>Olá, meu nome é Alex</h1>
                <p>Desenvolvedor Front-end com experiência em React, Next.js, TypeScript e apaixonado por criar interfaces modernas e acessíveis. Facilidade de trabalho com equipes UX/UI, aplico metodologias ágeis e valorizo o conceito mobile first.</p>
            </div>
        </section>
        </>
    );
}

export default Introducing;