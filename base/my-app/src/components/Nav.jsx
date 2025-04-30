export default function Nav() {
    return(
        <div className={'flex items-center gap-2 bg-blue-600 py-2 sm:px-24 font-semibold text-xs text-white '}>

            <div className={'flex  items-center rounded-full hover:bg-white hover:text-blue-600 px-4 py-1 gap-1 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>

                <p>Tous nos rayons</p>
            </div>


            <div
                className={'flex border-[0.2px] border-gray-300 items-center rounded-full hover:bg-white hover:text-blue-600 px-4 py-1 gap-1 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>

                <p>Nos categories</p>
            </div>


            <div
                className={'flex border-[0.2px] border-gray-300 items-center rounded-full hover:bg-white hover:text-blue-600 px-4 py-1 gap-1 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>

                <p>Nouveautés</p>
            </div>


            <div
                className={'flex border-[0.2px] border-gray-300 items-center rounded-full hover:bg-white hover:text-blue-600 px-4 py-1 gap-1 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>

                <p>Promotion</p>
            </div>


            <div
                className={'flex border-[0.2px] border-gray-300 items-center rounded-full hover:bg-white hover:text-blue-600 px-4 py-1 gap-1 cursor-pointer'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                     stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
                </svg>

                <p>Meilleurs ventes</p>
            </div>


        </div>
    );
}