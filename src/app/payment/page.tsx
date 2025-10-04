import React from "react";

const Payment = () => {
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
                    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
                        <div className="flex flex-wrap gap-2 p-4">
                            <a
                                className="text-[#51946c] text-base font-medium leading-normal"
                                href="#"
                            >
                                Carrito
                            </a>
                            <span className="text-[#51946c] text-base font-medium leading-normal">
                                /
                            </span>
                            <span className="text-[#0e1a13] text-base font-medium leading-normal">
                                Pago
                            </span>
                        </div>
                        <h2 className="text-[#0e1a13] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
                            Información de Envío
                        </h2>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Nombre
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Dirección
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Ciudad
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Código Postal
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    País
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Correo Electrónico
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Teléfono
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="px-4">
                            <label className="flex gap-x-3 py-3 flex-row">
                                <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded border-[#d1e6d9] border-2 bg-transparent text-[#38e07b] checked:bg-[#38e07b] checked:border-[#38e07b] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d1e6d9] focus:outline-none"
                                />
                                <p className="text-[#0e1a13] text-base font-normal leading-normal">
                                    La dirección de facturación es la misma que
                                    la de envío
                                </p>
                            </label>
                        </div>
                        <h2 className="text-[#0e1a13] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
                            Método de Pago
                        </h2>
                        <div className="flex flex-col gap-3 p-4">
                            <label className="flex items-center gap-4 rounded-lg border border-solid border-[#d1e6d9] p-[15px]">
                                <input
                                    type="radio"
                                    className="h-5 w-5 border-2 border-[#d1e6d9] bg-transparent text-transparent checked:border-[#38e07b] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#38e07b]"
                                    name="81ba45c3-86a4-492f-8b3f-c7704e5cf154"
                                    checked
                                />
                                <div className="flex grow flex-col">
                                    <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                        Tarjeta de Crédito
                                    </p>
                                </div>
                            </label>
                            <label className="flex items-center gap-4 rounded-lg border border-solid border-[#d1e6d9] p-[15px]">
                                <input
                                    type="radio"
                                    className="h-5 w-5 border-2 border-[#d1e6d9] bg-transparent text-transparent checked:border-[#38e07b] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#38e07b]"
                                    name="81ba45c3-86a4-492f-8b3f-c7704e5cf154"
                                />
                                <div className="flex grow flex-col">
                                    <p className="text-[#0e1a13] text-sm font-medium leading-normal">
                                        PayPal
                                    </p>
                                </div>
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Número de Tarjeta
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Fecha de Expiración
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    CVC
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                            <label className="flex flex-col min-w-40 flex-1">
                                <p className="text-[#0e1a13] text-base font-medium leading-normal pb-2">
                                    Nombre en la Tarjeta
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1a13] focus:outline-0 focus:ring-0 border border-[#d1e6d9] bg-[#f8fbfa] focus:border-[#d1e6d9] h-14 placeholder:text-[#51946c] p-[15px] text-base font-normal leading-normal"
                                    value=""
                                />
                            </label>
                        </div>
                        <div className="flex px-4 py-3">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 flex-1 bg-[#38e07b] text-[#0e1a13] text-base font-bold leading-normal tracking-[0.015em]">
                                <span className="truncate">
                                    Realizar Pedido
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
