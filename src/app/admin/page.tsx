import React, { JSX } from "react";

export default function Admin(): JSX.Element {
  return (
    <div className="group/design-root relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-[#f8fbfa]">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center gap-1 px-6 py-5">
          <div className="layout-content-container flex w-80 flex-col">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-[#f8fbfa] p-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-base leading-normal font-medium text-[#0e1a13]">
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
                    <p className="text-sm leading-normal font-medium text-[#0e1a13]">
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
                    <p className="text-sm leading-normal font-medium text-[#0e1a13]">
                      Pedidos
                    </p>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-[#e8f2ec] px-3 py-2">
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
                    <p className="text-sm leading-normal font-medium text-[#0e1a13]">
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
                    <p className="text-sm leading-normal font-medium text-[#0e1a13]">
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
                    <p className="text-sm leading-normal font-medium text-[#0e1a13]">
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
                  <p className="text-sm leading-normal font-medium text-[#0e1a13]">
                    Ver tienda
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="layout-content-container flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="tracking-light min-w-72 text-[32px] leading-tight font-bold text-[#0e1a13]">
                Productos
              </p>
              <button className="flex h-8 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                <span className="truncate">Añadir producto</span>
              </button>
            </div>
            <div className="px-4 py-3">
              <label className="flex h-12 w-full min-w-40 flex-col">
                <div className="flex h-full w-full flex-1 items-stretch rounded-lg">
                  <div
                    className="flex items-center justify-center rounded-l-lg border-r-0 border-none bg-[#e8f2ec] pl-4 text-[#51946c]"
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
                    className="form-input flex h-full w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg rounded-l-none border-l-0 border-none bg-[#e8f2ec] px-4 pl-2 text-base leading-normal font-normal text-[#0e1a13] placeholder:text-[#51946c] focus:border-none focus:ring-0 focus:outline-0"
                    value=""
                  />
                </div>
              </label>
            </div>
            <div className="pb-3">
              <div className="flex gap-8 border-b border-[#d1e6d9] px-4">
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-[#38e07b] pt-4 pb-[13px] text-[#0e1a13]"
                  href="#"
                >
                  <p className="text-sm leading-normal font-bold tracking-[0.015em] text-[#0e1a13]">
                    Todos
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pt-4 pb-[13px] text-[#51946c]"
                  href="#"
                >
                  <p className="text-sm leading-normal font-bold tracking-[0.015em] text-[#51946c]">
                    Activo
                  </p>
                </a>
                <a
                  className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pt-4 pb-[13px] text-[#51946c]"
                  href="#"
                >
                  <p className="text-sm leading-normal font-bold tracking-[0.015em] text-[#51946c]">
                    Borrador
                  </p>
                </a>
              </div>
            </div>
            <div className="@container px-4 py-3">
              <div className="flex overflow-hidden rounded-lg border border-[#d1e6d9] bg-[#f8fbfa]">
                <table className="flex-1">
                  <thead>
                    <tr className="bg-[#f8fbfa]">
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 w-14 px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Producto
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 w-[400px] px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Stock
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 w-[400px] px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Precio
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 w-60 px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Estado
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 w-[400px] px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Tipo
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 w-[400px] px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Ventas
                      </th>
                      <th className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 w-[400px] px-4 py-3 text-left text-sm leading-normal font-medium text-[#0e1a13]">
                        Ingresos
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-t-[#d1e6d9]">
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] w-14 px-4 py-2 text-sm leading-normal font-normal">
                        <div className="aspect-square w-10 rounded-full bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#0e1a13]">
                        12
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        59.99€
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] w-60 px-4 py-2 text-sm leading-normal font-normal">
                        <button className="flex h-8 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                          <span className="truncate">Activo</span>
                        </button>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        Caña de pescar
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        25
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        1499.75€
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d1e6d9]">
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] w-14 px-4 py-2 text-sm leading-normal font-normal">
                        <div className="aspect-square w-10 rounded-full bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#0e1a13]">
                        8
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        39.99€
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] w-60 px-4 py-2 text-sm leading-normal font-normal">
                        <button className="flex h-8 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                          <span className="truncate">Activo</span>
                        </button>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        Carrete de pescar
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        18
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        719.82€
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d1e6d9]">
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] w-14 px-4 py-2 text-sm leading-normal font-normal">
                        <div className="aspect-square w-10 rounded-full bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#0e1a13]">
                        20
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        9.99€
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] w-60 px-4 py-2 text-sm leading-normal font-normal">
                        <button className="flex h-8 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                          <span className="truncate">Activo</span>
                        </button>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        Línea de pescar
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        50
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        499.50€
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d1e6d9]">
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] w-14 px-4 py-2 text-sm leading-normal font-normal">
                        <div className="aspect-square w-10 rounded-full bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#0e1a13]">
                        15
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        4.99€
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] w-60 px-4 py-2 text-sm leading-normal font-normal">
                        <button className="flex h-8 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                          <span className="truncate">Activo</span>
                        </button>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        Señuelo de pescar
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        75
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        374.25€
                      </td>
                    </tr>
                    <tr className="border-t border-t-[#d1e6d9]">
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-56 h-[72px] w-14 px-4 py-2 text-sm leading-normal font-normal">
                        <div className="aspect-square w-10 rounded-full bg-[url('/images/bg-header.png')] bg-cover bg-center bg-no-repeat"></div>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-176 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#0e1a13]">
                        5
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-296 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        79.99€
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-416 h-[72px] w-60 px-4 py-2 text-sm leading-normal font-normal">
                        <button className="flex h-8 w-full max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#e8f2ec] px-4 text-sm leading-normal font-medium text-[#0e1a13]">
                          <span className="truncate">Activo</span>
                        </button>
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-536 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        Chaleco de pescar
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-656 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
                        10
                      </td>
                      <td className="table-359b9abc-4348-466d-a3a2-06687d959304-column-776 h-[72px] w-[400px] px-4 py-2 text-sm leading-normal font-normal text-[#51946c]">
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
}
