import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

const ProductPagination = ({ queries, setQueries, totalPages }) => {

    const handlePageChange = (page) => {
        setQueries((prev) => ({ ...prev, page }));
      };

  return (
    <div className="mt-6 flex justify-center">
      <Pagination>
        <PaginationContent>
          <PaginationPrevious
            disabled={queries.page === 1}
            onClick={() => {
              if (queries.page > 1) {
                handlePageChange(queries.page - 1);
              }
            }}
            className={`rounded-md px-3 py-1 ${
              queries.page === 1
                ? "cursor-not-allowed opacity-50"
                : "cursor-pointer hover:bg-tertiary-background-hover"
            }`}
          />
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <PaginationLink
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={`rounded-md px-4 py-2 ${
                  queries.page === pageNumber
                    ? "cursor-not-allowed bg-tertiary-background text-button-text"
                    : "cursor-pointer text-button-text hover:bg-tertiary-background-hover"
                }`}
              >
                {pageNumber}
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
            className={`rounded-md px-3 py-1 ${
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
