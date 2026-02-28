// import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// export const PagePagination=
//    <Pagination>
//         <PaginationContent>
//           <PaginationItem>
//             <PaginationPrevious
//               href={`?page=${Number(page) - 1}`}
//               aria-disabled={Number(page) <= 1}
//               tabIndex={Number(page) <= 1 ? -1 : undefined}
//               className={
//                 Number(page) <= 1 ? "pointer-events-none opacity-30" : undefined
//               }
//             />
//           </PaginationItem>
//           {pages.map((pageNum, index) => {
//             if (Number(pageNum) + 3 < currentPage) return null;
//             if (Number(pageNum) - 3 > currentPage) return null;
//             return (
//               <PaginationItem key={index}>
//                 <PaginationLink href={`?page=${pageNum}`}>
//                   {pageNum}
//                 </PaginationLink>
//               </PaginationItem>
//             );
//           })}
//           <PaginationItem>
//             <PaginationNext href={`?page=${Number(page) + 1}`} />
//           </PaginationItem>
//         </PaginationContent>
//       </Pagination>
