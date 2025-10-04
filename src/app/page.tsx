export default function Home() {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fbfa] group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f2ec] px-10 py-3">
                    <div className="flex items-center gap-4 text-[#0e1a13]">
                        <div className="size-4">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e1a13] text-lg font-bold leading-tight tracking-[-0.015em]">
                            Nature Fly Fishing
                        </h2>
                    </div>
                    <div className="flex flex-1 justify-end gap-8">
                        <div className="flex items-center gap-9">
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Inicio
                            </a>
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Tienda
                            </a>
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Blog
                            </a>
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Contacto
                            </a>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Iniciar sesión</span>
                            </button>
                            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e8f2ec] text-[#0e1a13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                                <div
                                    className="text-[#0e1a13]"
                                    data-icon="MagnifyingGlass"
                                    data-size="20px"
                                    data-weight="regular"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                    </svg>
                                </div>
                            </button>
                            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e8f2ec] text-[#0e1a13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                                <div
                                    className="text-[#0e1a13]"
                                    data-icon="ShoppingBag"
                                    data-size="20px"
                                    data-weight="regular"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20px"
                                        height="20px"
                                        fill="currentColor"
                                        viewBox="0 0 256 256"
                                    >
                                        <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="@container">
                            <div className="@[480px]:p-4">
                                <div className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-center justify-center p-4 bg-[url('/images/bg-header.png')] bg-gradient-to-b from-black/10 to-black/40">
                                    <div className="flex flex-col gap-2 text-center">
                                        <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                                            Equípate para tu próxima aventura
                                        </h1>
                                        <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                                            Encuentra todo lo que necesitas para
                                            una experiencia inolvidable de pesca
                                            con mosca.
                                        </h2>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#38e07b] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                                        <span className="truncate">
                                            Comprar ahora
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Productos destacados
                        </h2>
                        <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&amp;::-webkit-scrollbar]:hidden">
                            <div className="flex items-stretch p-4 gap-3">
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                                    <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 bg-[url("/images/section.png")]'></div>
                                    <div>
                                        <p className="text-[#0e1a13] text-base font-medium leading-normal">
                                            Caña de pescar de alta calidad
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Diseñada para lanzamientos precisos
                                            y suaves.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                                    <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 bg-[url("/images/section.png")]'></div>
                                    <div>
                                        <p className="text-[#0e1a13] text-base font-medium leading-normal">
                                            Carrete de pesca duradero
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Construido para resistir las
                                            condiciones más duras.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                                    <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 bg-[url("/images/section.png")]'></div>
                                    <div>
                                        <p className="text-[#0e1a13] text-base font-medium leading-normal">
                                            Línea de pesca de alto rendimiento
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Ofrece una excelente sensibilidad y
                                            resistencia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Novedades
                        </h2>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Nuevo
                                        </p>
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Nueva colección de moscas
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Descubre nuestra última selección de
                                            moscas artesanales, perfectas para
                                            atraer a una variedad de peces.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Ver colección
                                        </span>
                                    </button>
                                </div>
                                <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 bg-[url("/images/fly.png")]'></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Blog
                                        </p>
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Consejos para principiantes
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Aprende los conceptos básicos de la
                                            pesca con mosca, desde el equipo
                                            esencial hasta las técnicas de
                                            lanzamiento.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer artículo
                                        </span>
                                    </button>
                                </div>
                                <div className='w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 bg-[url("/images/fly.png")]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className="flex justify-center">
                    <div className="flex max-w-[960px] flex-1 flex-col">
                        <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
                            <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                                <a
                                    className="text-[#51946c] text-base font-normal leading-normal min-w-40"
                                    href="#"
                                >
                                    Política de privacidad
                                </a>
                                <a
                                    className="text-[#51946c] text-base font-normal leading-normal min-w-40"
                                    href="#"
                                >
                                    Términos de servicio
                                </a>
                                <a
                                    className="text-[#51946c] text-base font-normal leading-normal min-w-40"
                                    href="#"
                                >
                                    Contacto
                                </a>
                            </div>
                            <p className="text-[#51946c] text-base font-normal leading-normal">
                                © 2024 Nature Fly Fishing. Todos los derechos
                                reservados.
                            </p>
                        </footer>
                    </div>
                </footer>
            </div>
        </div>
    );
}
