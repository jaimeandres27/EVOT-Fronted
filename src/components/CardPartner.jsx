import { useEffect } from 'react';
import ieprav from '../assets/ieprav.jpg';

export default function CardPartner(props) {
    return (
        <>
            <div className='w-[150px] h-auto grid justify-center overflow-hidden border-solid shadow-md'>
                <picture className='h-auto w-full rounded-full overflow-hidden flex justify-center'>
                    <img className="w-full object-contain object-center" src={props?.partner?.logo} alt={props?.partner?.usuario[0].nombreUsuario} />
                </picture>
                <div className='p-3 flex justify-center mt-1'>
                    <h2 className='text-blue_dark text-center'>{props?.partner?.nombreInstitucion || "Partner Name"}</h2>
                </div>
            </div>
        </>
    )
}