import React from "react";

const Menu: React.FC = () => {
  return (
    <header className="flex items-center justify-between border-b border-solid px-10 py-3 whitespace-nowrap">
      <div className="flex items-center gap-4">
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
        <h2 className="text-lg leading-tight font-bold tracking-[-0.015em]">
          Nature Fly Fishing
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-sm leading-normal font-medium" href="/">
            Inicio
          </a>
          <a className="text-sm leading-normal font-medium" href="/articles">
            Tienda
          </a>
          <a className="text-sm leading-normal font-medium" href="/blog">
            Blog
          </a>
          <a className="text-sm leading-normal font-medium" href="/contact">
            Contacto
          </a>
        </div>
        <div className="flex gap-2">
          <button className="flex h-10 max-w-[480px] min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm leading-normal font-bold tracking-[0.015em]">
            <span className="truncate">Iniciar sesión</span>
          </button>
          <button className="flex h-10 max-w-[480px] min-w-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-2.5 text-sm leading-normal font-bold tracking-[0.015em]">
            <div
              className=""
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
          <button className="flex h-10 max-w-[480px] min-w-0 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg px-2.5 text-sm leading-normal font-bold tracking-[0.015em]">
            <div
              className=""
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
  );
};

export default Menu;
