import { fetchCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = { title: 'Customers' };

const CustomersPage = async () => {
  const customers = await fetchCustomers();

  return (
    <div className="w-full">
      <Suspense key="customers" fallback={<InvoicesTableSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </div>
  );
};

export default CustomersPage;
