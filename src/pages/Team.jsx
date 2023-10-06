import CardUser from "../components/CardUser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Team() {
    return (
        <>
            <Navbar/>
            <main className="grid items-center justify-center w-screen h-full pt-[8rem]">
                <section className="backdrop-blur-sm w-screen h-20 flex justify-center items-center">
                    <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight text-blue_dark text-center leading-none md:text-5xl xl:text-6xl"> Meet Our Team</h1>
                </section>
                <section className=" px-5 grid justify-center gap-10 grid-cols-3 ">
                    <div className="flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardUser />
                    </div>
                    <div className="flex items-center justify-center">
                        <CardUser />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}