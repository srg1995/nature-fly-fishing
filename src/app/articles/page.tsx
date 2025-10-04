import React from "react";

const Articles = () => {
    return (
        <div className="layout-container flex h-full grow flex-col">
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e8f3ec] px-10 py-3">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-[#0e1b13]">
                        <div className="size-4">
                            <svg
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <h2 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em]">
                            Pesca con Mosca Natural
                        </h2>
                    </div>
                    <div className="flex items-center gap-9">
                        <a
                            className="text-[#0e1b13] text-sm font-medium leading-normal"
                            href="#"
                        >
                            Inicio
                        </a>
                        <a
                            className="text-[#0e1b13] text-sm font-medium leading-normal"
                            href="#"
                        >
                            Productos
                        </a>
                        <a
                            className="text-[#0e1b13] text-sm font-medium leading-normal"
                            href="#"
                        >
                            Blog
                        </a>
                        <a
                            className="text-[#0e1b13] text-sm font-medium leading-normal"
                            href="#"
                        >
                            Contacto
                        </a>
                    </div>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <label className="flex flex-col min-w-40 !h-10 max-w-64">
                        <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                            <div
                                className="text-[#50956c] flex border-none bg-[#e8f3ec] items-center justify-center pl-4 rounded-l-lg border-r-0"
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
                                placeholder="Search"
                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border-none bg-[#e8f3ec] focus:border-none h-full placeholder:text-[#50956c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                value=""
                            />
                        </div>
                    </label>
                    <div className="flex gap-2">
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e8f3ec] text-[#0e1b13] text-sm font-bold leading-normal tracking-[0.015em]">
                            <span className="truncate">Carrito</span>
                        </button>
                        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 bg-[#e8f3ec] text-[#0e1b13] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
                            <div
                                className="text-[#0e1b13]"
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
                </div>
            </header>
            <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col w-80">
                    <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Filtrar
                    </h3>
                    <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Tipo de Mosca
                    </h3>
                    <div className="px-4">
                        <label className="flex gap-x-3 py-3 flex-row">
                            <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-[#d1e6d9] border-2 bg-transparent text-[#36e27b] checked:bg-[#36e27b] checked:border-[#36e27b] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6d9] focus:outline-none"
                            />
                            <p className="text-[#0e1b13] text-base font-normal leading-normal">
                                Efímeras
                            </p>
                        </label>
                        <label className="flex gap-x-3 py-3 flex-row">
                            <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-[#d1e6d9] border-2 bg-transparent text-[#36e27b] checked:bg-[#36e27b] checked:border-[#36e27b] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6d9] focus:outline-none"
                            />
                            <p className="text-[#0e1b13] text-base font-normal leading-normal">
                                Perdigones
                            </p>
                        </label>
                        <label className="flex gap-x-3 py-3 flex-row">
                            <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-[#d1e6d9] border-2 bg-transparent text-[#36e27b] checked:bg-[#36e27b] checked:border-[#36e27b] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6d9] focus:outline-none"
                            />
                            <p className="text-[#0e1b13] text-base font-normal leading-normal">
                                Ninfas
                            </p>
                        </label>
                    </div>
                    <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Tamaño
                    </h3>
                    <div className="flex gap-3 p-3 flex-wrap pr-4">
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f3ec] pl-4 pr-4">
                            <p className="text-[#0e1b13] text-sm font-medium leading-normal">
                                #12
                            </p>
                        </div>
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f3ec] pl-4 pr-4">
                            <p className="text-[#0e1b13] text-sm font-medium leading-normal">
                                #14
                            </p>
                        </div>
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f3ec] pl-4 pr-4">
                            <p className="text-[#0e1b13] text-sm font-medium leading-normal">
                                #16
                            </p>
                        </div>
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f3ec] pl-4 pr-4">
                            <p className="text-[#0e1b13] text-sm font-medium leading-normal">
                                #18
                            </p>
                        </div>
                        <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#e8f3ec] pl-4 pr-4">
                            <p className="text-[#0e1b13] text-sm font-medium leading-normal">
                                #20
                            </p>
                        </div>
                    </div>
                    <h3 className="text-[#0e1b13] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
                        Precio
                    </h3>
                    <div className="@container">
                        <div className="relative flex w-full flex-col items-start justify-between gap-3 p-4 @[480px]:flex-row">
                            <p className="text-[#0e1b13] text-base font-medium leading-normal w-full shrink-[3]">
                                Rango de precios
                            </p>
                            <div className="flex h-[38px] w-full pt-1.5">
                                <div className="flex h-1 w-full rounded-sm bg-[#d1e6d9] pl-[60%] pr-[15%]">
                                    <div className="relative">
                                        <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                                            <div className="size-4 rounded-full bg-[#36e27b]"></div>
                                            <p className="text-[#0e1b13] text-sm font-normal leading-normal">
                                                0
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-1 flex-1 rounded-sm bg-[#36e27b]"></div>
                                    <div className="relative">
                                        <div className="absolute -left-3 -top-1.5 flex flex-col items-center gap-1">
                                            <div className="size-4 rounded-full bg-[#36e27b]"></div>
                                            <p className="text-[#0e1b13] text-sm font-normal leading-normal">
                                                100
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                    <div className="flex flex-wrap justify-between gap-3 p-4">
                        <p className="text-[#0e1b13] tracking-light text-[32px] font-bold leading-tight min-w-72">
                            Moscas, Ninfas y Ahogadas
                        </p>
                    </div>
                    <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                        <label className="flex flex-col min-w-40 flex-1">
                            <select className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 bg-[image:--select-button-svg] placeholder:text-[#50956c] p-[15px] text-base font-normal leading-normal">
                                <option value="one">
                                    Ordenar por: Popularidad
                                </option>
                                <option value="two">two</option>
                                <option value="three">three</option>
                            </select>
                        </label>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
                        <div className="flex flex-col gap-3 pb-3">
                            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg bg-[url('/images/bg-header.png')]"></div>
                            <div>
                                <p className="text-[#0e1b13] text-base font-medium leading-normal">
                                    Mosca Seca Clásica
                                </p>
                                <p className="text-[#50956c] text-sm font-normal leading-normal">
                                    Mosca seca para truchas y salmones
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg bg-[url('/images/bg-header.png')]"></div>
                            <div>
                                <p className="text-[#0e1b13] text-base font-medium leading-normal">
                                    Ninfa de Perdigón
                                </p>
                                <p className="text-[#50956c] text-sm font-normal leading-normal">
                                    Ninfa para pesca en ríos de corriente
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 pb-3">
                            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg bg-[url('/images/bg-header.png')]"></div>
                            <div>
                                <p className="text-[#0e1b13] text-base font-medium leading-normal">
                                    Ahogada de Pluma
                                </p>
                                <p className="text-[#50956c] text-sm font-normal leading-normal">
                                    Ahogada para pesca en lagos y embalses
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-4">
                        <a
                            href="#"
                            className="flex size-10 items-center justify-center"
                        >
                            <div
                                className="text-[#0e1b13]"
                                data-icon="CaretLeft"
                                data-size="18px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                                </svg>
                            </div>
                        </a>
                        <a
                            className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-[#0e1b13] rounded-full bg-[#e8f3ec]"
                            href="#"
                        >
                            1
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] rounded-full"
                            href="#"
                        >
                            2
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] rounded-full"
                            href="#"
                        >
                            3
                        </a>
                        <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] rounded-full">
                            ...
                        </span>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] rounded-full"
                            href="#"
                        >
                            10
                        </a>
                        <a
                            href="#"
                            className="flex size-10 items-center justify-center"
                        >
                            <div
                                className="text-[#0e1b13]"
                                data-icon="CaretRight"
                                data-size="18px"
                                data-weight="regular"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18px"
                                    height="18px"
                                    fill="currentColor"
                                    viewBox="0 0 256 256"
                                >
                                    <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

Articles.propTypes = {};

export default Articles;
