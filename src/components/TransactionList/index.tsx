import { useState } from 'react';

import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ListSortDescending,
  Trash,
  X,
} from 'lucide-react';

import styles from './styles.module.css';
import { useFinanceContext } from '../../contexts/useFinanceContext';
import { FinanceActionTypes } from '../../contexts/financeActions';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/formatDate';

export function TransactionList() {
  const { state, dispatch } = useFinanceContext();

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const filteredTransactions = state.transactions.filter(transaction => {
    const matchesSearch = transaction.description
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = typeFilter === 'all' || transaction.type === typeFilter;

    const matchesCategory =
      categoryFilter === 'all' || transaction.category === categoryFilter;

    const matchesDate =
      (!startDate ||
        new Date(transaction.date) >= new Date(`${startDate}T00:00:00`)) &&
      (!endDate ||
        new Date(transaction.date) <= new Date(`${endDate}T23:59:59`));

    return matchesSearch && matchesType && matchesCategory && matchesDate;
  });

  const sortedTransactions = [...filteredTransactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  function handleDeleteTransaction(id: number) {
    dispatch({ type: FinanceActionTypes.DELETE_TRANSACTION, payload: id });
  }

  function handleClearFilter() {
    setSearch('');
    setTypeFilter('all');
    setCategoryFilter('all');
    setStartDate('');
    setEndDate('');
  }

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerContainer}>
          <ListSortDescending className={styles.listIcon} />
          <div className={styles.textContainer}>
            <h2>Transações</h2>
            <p>Lista das suas últimas movimentações</p>
          </div>
        </div>

        <div className={styles.clearFilterButton}>
          <button type='button' onClick={handleClearFilter}>
            <X className={styles.clearFilterIcon} /> Limpar filtros
          </button>
        </div>
      </div>

      <div className={styles.filterContainer}>
        <input
          type='text'
          value={search}
          placeholder='Pesquisar'
          onChange={e => setSearch(e.target.value)}
        />
        <select
          name='category'
          id='category'
          value={categoryFilter}
          onChange={e => setCategoryFilter(e.target.value)}
        >
          <option value='all'>Todas as categorias</option>
          {state.categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          name='type'
          id='type'
          value={typeFilter}
          onChange={e => setTypeFilter(e.target.value)}
        >
          <option value='all'>Todos os tipos</option>
          <option value='income'>Receita</option>
          <option value='expense'>Despesas</option>
        </select>

        <div className={styles.filterDateContainer}>
          <input
            type='date'
            value={startDate}
            onChange={e => setStartDate(e.target.value)}
          />

          <input
            type='date'
            value={endDate}
            onChange={e => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <ul>
        {sortedTransactions.map(transaction => (
          <li key={transaction.id}>
            <div className={styles.trasationLeft}>
              {transaction.type === 'income' ? (
                <ArrowUpFromLine className={styles.arrowUpIcon} />
              ) : (
                <ArrowDownFromLine className={styles.arrowDownIcon} />
              )}
              <div className={styles.transationDetails}>
                <span>{transaction.description}</span>
                <p>{transaction.category}</p>
              </div>
            </div>

            <div className={styles.trasationMiddle}>
              {transaction.type === 'income' ? (
                <span className={styles.amountPositive}>
                  + {formatCurrency(transaction.amount)}
                </span>
              ) : (
                <span className={styles.amountNegative}>
                  - {formatCurrency(transaction.amount)}
                </span>
              )}
            </div>

            <div className={styles.trasationRight}>
              <span>{formatDate(transaction.date)}</span>
              <button
                className={styles.trashButton}
                type='button'
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                <Trash className={styles.trashIcon} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
