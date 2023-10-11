import CardUser from "../components/CardUser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Team() {
    return (
        <>
            <Navbar/>
            <main className="pt-[8rem]">
                <section className="h-20 flex justify-center items-center">
                    <h1 className=" text-4xl font-extrabold tracking-tight text-blue_dark text-center leading-none md:text-5xl xl:text-6xl"> Meet Our Team</h1>
                </section>
                <section className="w-full grid justify-center gap-5 grid-cols-3 ">
                    <div className="max-w-lg flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="max-w-lg flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="max-w-lg flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="max-w-lg flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="max-w-lg flex items-center justify-center">
                        <CardUser />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}