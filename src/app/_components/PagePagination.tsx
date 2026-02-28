import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const PagePagination = ({
  page,
  total_pages,
  url,
}: {
  page: string | string[] | undefined;
  total_pages: number;
  url: string;
}) => {
  const currentPage = Number(page ?? 1);
  const totalPagesCount = Number(total_pages) || 0;
  const limitedPages = Math.min(totalPagesCount, 500);
  const pages = Array.from({ length: limitedPages }, (_, index) => index + 1);

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`${url}page=${Number(page) - 1}`}
              aria-disabled={Number(page) <= 1}
              tabIndex={Number(page) <= 1 ? -1 : undefined}
              className={
                Number(page) <= 1 ? "pointer-events-none opacity-30" : undefined
              }
            />
          </PaginationItem>
          {pages.map((pageNum, index) => {
            if (Number(pageNum) + 3 < currentPage) return null;
            if (Number(pageNum) - 3 > currentPage) return null;
            return (
              <PaginationItem key={index}>
                <PaginationLink href={`${url}page=${pageNum}`}>
                  {pageNum}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          <PaginationItem>
            <PaginationNext href={`${url}page=${Number(page) + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
