import React from "react";

const Admin = () => {
    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f8fbfa] group/design-root overflow-x-hidden">
            <div className="layout-container flex h-full grow flex-col">
                <div className="gap-1 px-6 flex flex-1 justify-center py-5">
                    <div className="layout-content-container flex flex-col w-80">
                        <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f8fbfa] p-4">
                            <div className="flex flex-col gap-4">
                                <h1 className="text-[#0e1a13] text-base font-medium leading-normal">
                                    Nature Fly Fishing
                                </h1>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-[#0e1a13]"
                                            data-icon="Layout"
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
                                                <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                            Panel de control
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-[#0e1a13]"
                                            data-icon="Package"
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
                                                <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                            Pedidos
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#e8f2ec]">
                                        <div
                                            className="text-[#0e1a13]"
                                            data-icon="Fish"
                                            data-size="24px"
                                            data-weight="fill"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24px"
                                                height="24px"
                                                fill="currentColor"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M168.06,75.94a12,12,0,1,1-12-12A12,12,0,0,1,168.06,75.94Zm39.87,81c-20.76,26.37-53.85,40.74-98.41,42.77l-22,51.42A8,8,0,0,1,80.13,256l-.51,0a8,8,0,0,1-7.19-5.78L57.62,198.37,5.8,183.53a8,8,0,0,1-1-15.05l51.43-22c2-44.57,16.41-77.66,42.79-98.41,43.21-34,104.91-22.83,116.84-20.25a16,16,0,0,1,12.26,12.26C230.76,52,241.94,113.76,207.93,157Zm4.6-113.49c-10.71-2.32-66-12.39-103.57,17.18A80.9,80.9,0,0,0,96.13,73.32a36,36,0,0,0,39.36,38.47,8,8,0,0,1,8.72,8.72,36,36,0,0,0,38.49,39.36,80.64,80.64,0,0,0,12.65-12.81C224.92,109.49,214.85,54.18,212.53,43.47Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                            Productos
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-[#0e1a13]"
                                            data-icon="Users"
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
                                                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                            Clientes
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-3 px-3 py-2">
                                        <div
                                            className="text-[#0e1a13]"
                                            data-icon="Megaphone"
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
                                                <path d="M240,120a48.05,48.05,0,0,0-48-48H152.2c-2.91-.17-53.62-3.74-101.91-44.24A16,16,0,0,0,24,40V200a16,16,0,0,0,26.29,12.25c37.77-31.68,77-40.76,93.71-43.3v31.72A16,16,0,0,0,151.12,214l11,7.33A16,16,0,0,0,186.5,212l11.77-44.36A48.07,48.07,0,0,0,240,120ZM40,199.93V40h0c42.81,35.91,86.63,45,104,47.24v65.48C126.65,155,82.84,164.07,40,199.93Zm131,8,0,.11-11-7.33V168h21.6ZM192,152H160V88h32a32,32,0,1,1,0,64Z"></path>
                                            </svg>
                                        </div>
                                        <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                            Marketing
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-3 px-3 py-2">
                                    <div
                                        className="text-[#0e1a13]"
                                        data-icon="ArrowLeft"
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
                                            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
                                        </svg>
                                    </div>
                                    <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                        Ver tienda
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
                        <div className="flex flex-wrap justify-between gap-3 p-4">
                            <p className="text-[#0e1a13] tracking-light text-[32px] font-bold leading-tight min-w-72">
                                Productos
                            </p>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal">
                                <span className="truncate">
                                    Añadir producto
                                </span>
                            </button>
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
                                        placeholder="Buscar productos"
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border-none bg-[#e8f2ec] focus:border-none h-full placeholder:text-[#51946c] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                                        value=""
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="pb-3">
                            <div className="flex border-b border-[#d1e6d9] px-4 gap-8">
                                <a
                                    className="flex flex-col items-center justify-center border-b-[3px] border-b-[#38e07b] text-[#0e1a13] pb-[13px] pt-4"
                                    href="#"
                                >
                                    <p className="text-[#0e1a13] text-sm font-bold leading-normal tracking-[0.015em]">
                                        Todos
                                    </p>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#51946c] pb-[13px] pt-4"
                                    href="#"
                                >
                                    <p className="text-[#51946c] text-sm font-bold leading-normal tracking-[0.015em]">
                                        Activo
                                    </p>
                                </a>
                                <a
                                    className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#51946c] pb-[13px] pt-4"
                                    href="#"
                                >
                                    <p className="text-[#51946c] text-sm font-bold leading-normal tracking-[0.015em]">
                                        Borrador
                                    </p>
                                </a>
                            </div>
                        </div>
                        <div className="px-4 py-3 @container">
                            <div className="flex overflow-hidden rounded-lg border border-[#d1e6d9] bg-[#f8fbfa]">
                                <table className="flex-1">
                                    <thead>
                                        <tr className="bg-[#f8fbfa]">
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 px-4 py-3 text-left text-[#0e1a13] w-14 text-sm font-medium leading-normal">
                                                Producto
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 px-4 py-3 text-left text-[#0e1a13] w-[400px] text-sm font-medium leading-normal">
                                                Stock
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 px-4 py-3 text-left text-[#0e1a13] w-[400px] text-sm font-medium leading-normal">
                                                Precio
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 px-4 py-3 text-left text-[#0e1a13] w-60 text-sm font-medium leading-normal">
                                                Estado
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 px-4 py-3 text-left text-[#0e1a13] w-[400px] text-sm font-medium leading-normal">
                                                Tipo
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 px-4 py-3 text-left text-[#0e1a13] w-[400px] text-sm font-medium leading-normal">
                                                Ventas
                                            </th>
                                            <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 px-4 py-3 text-left text-[#0e1a13] w-[400px] text-sm font-medium leading-normal">
                                                Ingresos
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-t-[#d1e6d9]">
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 bg-[url('/images/bg-header.png')] "></div>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] px-4 py-2 w-[400px] text-[#0e1a13] text-sm font-normal leading-normal">
                                                12
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                59.99€
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-full">
                                                    <span className="truncate">
                                                        Activo
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                Caña de pescar
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                25
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                1499.75€
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#d1e6d9]">
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 bg-[url('/images/bg-header.png')] "></div>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] px-4 py-2 w-[400px] text-[#0e1a13] text-sm font-normal leading-normal">
                                                8
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                39.99€
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-full">
                                                    <span className="truncate">
                                                        Activo
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                Carrete de pescar
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                18
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                719.82€
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#d1e6d9]">
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 bg-[url('/images/bg-header.png')] "></div>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] px-4 py-2 w-[400px] text-[#0e1a13] text-sm font-normal leading-normal">
                                                20
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                9.99€
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-full">
                                                    <span className="truncate">
                                                        Activo
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                Línea de pescar
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                50
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                499.50€
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#d1e6d9]">
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 bg-[url('/images/bg-header.png')] "></div>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] px-4 py-2 w-[400px] text-[#0e1a13] text-sm font-normal leading-normal">
                                                15
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                4.99€
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-full">
                                                    <span className="truncate">
                                                        Activo
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                Señuelo de pescar
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                75
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                374.25€
                                            </td>
                                        </tr>
                                        <tr className="border-t border-t-[#d1e6d9]">
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] px-4 py-2 w-14 text-sm font-normal leading-normal">
                                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 bg-[url('/images/bg-header.png')] "></div>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] px-4 py-2 w-[400px] text-[#0e1a13] text-sm font-normal leading-normal">
                                                5
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                79.99€
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] px-4 py-2 w-60 text-sm font-normal leading-normal">
                                                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 bg-[#e8f2ec] text-[#0e1a13] text-sm font-medium leading-normal w-full">
                                                    <span className="truncate">
                                                        Activo
                                                    </span>
                                                </button>
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                Chaleco de pescar
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                10
                                            </td>
                                            <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] px-4 py-2 w-[400px] text-[#51946c] text-sm font-normal leading-normal">
                                                799.90€
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
