import type { Customer } from './customer';

export function summarise(customers: Customer[]) {
  const total = customers.reduce((sum, customer) => sum + customer.balance, 0);
  const owing = customers.filter((customer) => customer.balance > 0);
  const average = owing.length === 0 ? 0 : total / owing.length;
  const ranked = [...owing]
    .sort((a, b) => b.balance - a.balance)
    .map((customer) => ({
      ...customer,
      share: total === 0 ? 0 : customer.balance / total,
    }));

  return {
    total,
    average,
    count: customers.length,
    owing: owing.length,
    settled: customers.length - owing.length,
    ranked,
  };
}
