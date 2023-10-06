import { useEffect, useState } from "react";
import CardPartner from "../components/CardPartner";
import * as API from '../services/institucions.service';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Partners() {

    const [ partners, setPartners ] = useState([]);

    useEffect(() =>{

        API.getActivePartners()
            .then((res)=>{
                console.log(res);
                setPartners(res?.data)
            })
            .catch((err) =>{
                console.log(err);
            })
    },[])

    return (
        <>
        <Navbar />
            <main className="grid justify-center items-center w-screen h-full pt-[8rem]">
                <section className="z-0 backdrop-blur-sm w-screen h-20 flex justify-center items-center">
                    <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight text-blue_dark text-center leading-none md:text-5xl xl:text-6xl"> Instituciones Asociadas</h1>
                </section>
                <section className="grid grid-cols-3 px-20 items-center justify-center gap-7 w-full">
                    {
                        partners.length > 0 &&

                        partners.map((partner) => {
                            return(
                                <>
                                    <div className="flex items-center justify-center">
                                        <CardPartner partner={partner}/>
                                    </div>
                                </>
                            )
                        })
                    }
                </section>
            </main>
        <Footer/>
        </>
    )
}