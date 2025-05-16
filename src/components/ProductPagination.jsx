"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const ProductPagination = ({ queries, setQueries, totalPages }) => {
  const handlePageChange = (page) => {
    setQueries((prev) => ({ ...prev, page }));
  };

  // Función para determinar qué páginas mostrar
  const getVisiblePages = () => {
    // En móviles mostramos menos páginas
    const isMobile = typeof window !== "undefined" && window.innerWidth < 640;
    const siblingsCount = isMobile ? 1 : 2;

    const pages = [];
    const currentPage = queries.page;

    // Siempre incluir la primera página
    pages.push(1);

    // Calcular el rango de páginas a mostrar alrededor de la página actual
    const rangeStart = Math.max(2, currentPage - siblingsCount);
    const rangeEnd = Math.min(totalPages - 1, currentPage + siblingsCount);

    // Añadir elipsis después de la página 1 si es necesario
    if (rangeStart > 2) {
      pages.push("ellipsis-start");
    }

    // Añadir páginas del rango
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }

    // Añadir elipsis antes de la última página si es necesario
    if (rangeEnd < totalPages - 1) {
      pages.push("ellipsis-end");
    }

    // Siempre incluir la última página si hay más de una página
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  // No renderizar paginación si solo hay una página
  if (totalPages <= 1) return null;

  return (
    <div className="mt-6 flex justify-center">
      <Pagination>
        <PaginationContent className="flex flex-wrap justify-center gap-1 sm:gap-0">
          <PaginationPrevious
            disabled={queries.page === 1}
            onClick={() => {
              if (queries.page > 1) {
                handlePageChange(queries.page - 1);
              }
            }}
            className={`rounded-md px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm ${
              queries.page === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-tertiary-background-hover"
            }`}
          />

          {getVisiblePages().map((page, index) => {
            if (page === "ellipsis-start" || page === "ellipsis-end") {
              return <PaginationEllipsis key={page} className="px-1 sm:px-2" />;
            }

            return (
              <PaginationLink
                key={page}
                onClick={() => handlePageChange(page)}
                className={`rounded-md px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm ${
                  queries.page === page
                    ? "cursor-not-allowed bg-tertiary-background text-button-text"
                    : "cursor-pointer text-button-text hover:bg-tertiary-background-hover"
                }`}
              >
                {page}
              </PaginationLink>
            );
          })}

          <PaginationNext
            disabled={queries.page === totalPages}
            onClick={() => {
              if (queries.page < totalPages) {
                handlePageChange(queries.page + 1);
              }
            }}
            className={`rounded-md px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm ${
              queries.page === totalPages
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-tertiary-background-hover"
            }`}
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default ProductPagination;
