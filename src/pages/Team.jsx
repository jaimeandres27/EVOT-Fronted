import CardUser from "../components/CardUser";

export default function Team() {
    return (
        <>
            <section className="backdrop-blur-sm w-full z-0 flex justify-center items-center h-40">
                <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight text-blue_dark text-center leading-none md:text-5xl xl:text-6xl"> Meet Our Team</h1>
            </section>
            <main className="grid justify-center mb-24">
                <section className=" px-5 grid justify-center gap-10 grid-cols-3 ">
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
                    <CardUser />
                </section>
            </main>
        </>
    )
}