import React from "react";

const Contact = () => {
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
                                Tienda
                            </a>
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Equipo
                            </a>
                            <a
                                className="text-[#0e1a13] text-sm font-medium leading-normal"
                                href="#"
                            >
                                Destinos
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
                        </div>
                    </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Contáctanos
                            </p>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Nombre
                                </p>
                                <input
                                    placeholder="Tu nombre"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Correo electrónico
                                </p>
                                <input
                                    placeholder="Tu correo electrónico"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Asunto
                                </p>
                                <input
                                    placeholder="Asunto"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Mensaje
                                </p>
                                <textarea
                                    placeholder="Tu mensaje"
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] min-h-36 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                ></textarea>
                            </label>
                        </div>
                        <div className="flex px-4 py-3 justify-start">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#38e07b] text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">Enviar</span>
                            </button>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Información de contacto
                        </h2>
                        <p className="text-[#0e1a13] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Correo electrónico: contacto@natureflyfishing.com
                        </p>
                        <p className="text-[#0e1a13] text-base font-normal leading-normal pb-3 pt-1 px-4">
                            Teléfono: +34 912 345 678
                        </p>
                        <div className="flex px-4 py-3">
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover bg-[url('/images/bg-header.png')]"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
