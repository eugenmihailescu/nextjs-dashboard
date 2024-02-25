import { fetchCustomersPages } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import { CustomersTableSkeleton, PaginationSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = { title: 'Customers' };

const CustomerPagination = async ({ query }: { query: string }) => {
  const totalPages = await fetchCustomersPages(query);

  return <Pagination totalPages={totalPages} />;
};

const CustomersPage = async ({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) => {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-xl`}>Customers</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <div className="w-full">
        <Suspense
          key={query + currentPage}
          fallback={
            <>
              <CustomersTableSkeleton />
              <PaginationSkeleton />
            </>
          }
        >
          <Table query={query} currentPage={currentPage} />
          <div className="mt-5 flex w-full justify-center">
            <CustomerPagination query={query} />
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default CustomersPage;
