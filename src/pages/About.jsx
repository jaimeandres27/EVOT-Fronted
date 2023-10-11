import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function () {
    return (
        <>
            <Navbar />
            <main className="w-screen h-screen  py-6 grid place-items-center">
                <section className="w-full h-64 flex items-center justify-center bg-[url('../../src/assets/about.jpg')] bg-auto bg-origin-content bg-top ">
                    <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight text-white_primary text-center leading-none md:text-5xl xl:text-6xl">
                        Acerca de Nosotros
                    </h1>
                </section>
                <section className="w-1/2 h-64 flex items-center justify-center ">
                    <p className="text-lg tracking-wide text-justify">
                        Somos un equipo pequeño de grandes mentes, enfocado en encontrar las mejores soluciones a los problemas mas basicos y cotidianos que se puedan presentar en pequeñas comunidades; con la intencion de no dejar a ningun por fuera
                    </p>
                </section>
            </main>
            <Footer/>
        </>
    )
}