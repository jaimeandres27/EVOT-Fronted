import { useEffect, useState } from "react";
import CardPartner from "../components/CardPartner";
import * as API from '../services/institucions.service';

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
            <section className="z-0 backdrop-blur-sm w-full flex justify-center items-center h-40">
                <h1 className="w-full mb-4 text-4xl font-extrabold tracking-tight text-blue_dark text-center leading-none md:text-5xl xl:text-6xl"> Instituciones Asociadas</h1>
            </section>
            <main className="grid justify-center mb-24">
                <section className="grid grid-cols-3 px-5 justify-center gap-7">
                    {
                        partners.length > 0 &&

                        partners.map((partner) => {
                            return(
                                <>
                                    <CardPartner partner={partner}/>
                                </>
                            )
                        })
                    }
                </section>
            </main>
        </>
    )
}