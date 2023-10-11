import developer from '../assets/developer.jpg'

export default function CardUser() {
    return (
        <>
            <div className="max-w-[250px] h-auto grid justify-center overflow-hidden border-solid p-2 border-2 rounded-lg transition ease-in hover:scale-105 hover:shadow-md ">
                <div className="w-[200px] h-[200px] overflow-hidden rounded-lg">
                    <img className="object-contain object-center" src={developer} alt="" />
                </div>
                <div className='flex flex-col m-2'>
                    <h1 className='text-xl text-blue_dark font-semibold'>Daniel Lopera</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className='flex flex-grow mx-4 my-3'>
                    <a className='h-8 w-8 p-1 hover:rounded-full hover:bg-blue_dark hover:text-white_primary flex items-center justify-center' href="">
                        <svg width="auto" height="auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                    <a className='h-8 w-8 p-1 hover:rounded-full hover:bg-blue_dark hover:text-white_primary' href="">
                        <svg width="auto" height="auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                    <a className='h-8 w-8 p-1 hover:rounded-full hover:bg-blue_dark hover:text-white_primary' href="">
                        <svg width="auto" height="auto" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}