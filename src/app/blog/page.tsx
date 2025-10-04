import React from "react";

const Blog = () => {
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
                                    data-icon="User"
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
                                        <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                                    </svg>
                                </div>
                            </button>
                        </div>
                        <div className="bg-[url('/images/bg-header.png')] bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"></div>
                    </div>
                </header>
                <div className="px-40 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Blog de Pesca con Mosca
                            </p>
                        </div>
                        <div className="px-4 py-3">
                            <label className="flex flex-col min-w-40 h-12 w-full">
                                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                                    <div
                                        className="text-[#51946c] flex border-none bg-[#e8f2ec] items-center justify-center pl-4 rounded-l-lg border-r-0"
                                        data-icon="MagnifyingGlass"
                                        data-size="24px"
                                        data-weight="regular"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24px"
                                            height="24px"
                                            fill="currentColor"
                                            viewBox="0 0 256 256"
                                        >
                                            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                                        </svg>
                                    </div>
                                    <input
                                        placeholder="Buscar en el blog"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-full placeholder:text-[#51946c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                        value=""
                                    />
                                </div>
                            </label>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Artículos Recientes
                        </h2>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Técnicas Avanzadas de Lanzamiento
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Aprende técnicas avanzadas para
                                            mejorar tu precisión y distancia en
                                            el lanzamiento.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Selección de Moscas para Diferentes
                                            Condiciones
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Guía completa sobre cómo elegir las
                                            moscas adecuadas según el clima y el
                                            tipo de agua.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Experiencias de Pesca en Ríos
                                            Patagónicos
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Relatos de pescadores sobre sus
                                            aventuras en los ríos de la
                                            Patagonia, con consejos y
                                            recomendaciones.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Categorías
                        </h2>
                        <div className="flex gap-3 p-3 flex-wrap pr-4">
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f2ec] pl-4 pr-4">
                                <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                    Técnicas
                                </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f2ec] pl-4 pr-4">
                                <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                    Noticias
                                </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f2ec] pl-4 pr-4">
                                <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                    Consejos
                                </p>
                            </div>
                            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f2ec] pl-4 pr-4">
                                <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                    Experiencias
                                </p>
                            </div>
                        </div>
                        <h2 className="text-[#0e1a13] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                            Artículos Destacados
                        </h2>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Conservación de Ríos y Ecosistemas
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Importancia de la conservación para
                                            la pesca sostenible y cómo puedes
                                            contribuir.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Equipamiento Esencial para
                                            Principiantes
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Guía sobre el equipo básico que todo
                                            principiante necesita para empezar a
                                            pescar con mosca.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-stretch justify-between gap-4 rounded-lg">
                                <div className="flex flex-[2_2_0px] flex-col gap-4">
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[#0e1a13] text-base font-bold leading-tight">
                                            Entrevistas con Expertos Pescadores
                                        </p>
                                        <p className="text-[#51946c] text-sm font-normal leading-normal">
                                            Entrevistas con pescadores
                                            experimentados que comparten sus
                                            conocimientos y secretos.
                                        </p>
                                    </div>
                                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-fit">
                                        <span className="truncate">
                                            Leer más
                                        </span>
                                    </button>
                                </div>
                                <div className="bg-[url('/images/bg-header.png')] w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
