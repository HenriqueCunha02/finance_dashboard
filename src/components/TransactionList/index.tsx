import {
  ArrowDownFromLine,
  ArrowUpFromLine,
  ListSortDescending,
  Trash,
} from 'lucide-react';
import styles from './styles.module.css';

export function TransactionList() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <ListSortDescending className={styles.listIcon} />
        <div className={styles.textContainer}>
          <h2>Transações</h2>
          <p>Lista das suas últimas movimentações</p>
        </div>
      </div>

      <ul>
        <li>
          <div className={styles.trasationLeft}>
            <ArrowUpFromLine className={styles.arrowUpIcon} />
            <div className={styles.transationDetails}>
              <span>Salário</span>
              <p>Trabalho</p>
            </div>
          </div>

          <div className={styles.trasationMiddle}>
            <span className={styles.amountPositive}>+ R$3.500,00</span>
          </div>

          <div className={styles.trasationRight}>
            <span>12/08/2026</span>
            <button className={styles.trashButton}>
              <Trash className={styles.trashIcon} />
            </button>
          </div>
        </li>

        <li>
          <div className={styles.trasationLeft}>
            <ArrowDownFromLine className={styles.arrowDownIcon} />
            <div className={styles.transationDetails}>
              <span>Gasolina</span>
              <p>Automóvel</p>
            </div>
          </div>

          <div className={styles.trasationMiddle}>
            <span className={styles.amountNegative}>- R$70,00</span>
          </div>

          <div className={styles.trasationRight}>
            <span>12/08/2026</span>
            <button className={styles.trashButton}>
              <Trash className={styles.trashIcon} />
            </button>
          </div>
        </li>

        <li>
          <div className={styles.trasationLeft}>
            <ArrowDownFromLine className={styles.arrowDownIcon} />
            <div className={styles.transationDetails}>
              <span>Mercado</span>
              <p>Alimentação</p>
            </div>
          </div>

          <div className={styles.trasationMiddle}>
            <span className={styles.amountNegative}>- R$200,00</span>
          </div>

          <div className={styles.trasationRight}>
            <span>11/08/2026</span>
            <button className={styles.trashButton}>
              <Trash className={styles.trashIcon} />
            </button>
          </div>
        </li>
        <li>
          <div className={styles.trasationLeft}>
            <ArrowDownFromLine className={styles.arrowDownIcon} />
            <div className={styles.transationDetails}>
              <span>Mercado</span>
              <p>Alimentação</p>
            </div>
          </div>

          <div className={styles.trasationMiddle}>
            <span className={styles.amountNegative}>- R$200,00</span>
          </div>

          <div className={styles.trasationRight}>
            <span>11/08/2026</span>
            <button className={styles.trashButton}>
              <Trash className={styles.trashIcon} />
            </button>
          </div>
        </li>
        <li>
          <div className={styles.trasationLeft}>
            <ArrowDownFromLine className={styles.arrowDownIcon} />
            <div className={styles.transationDetails}>
              <span>Mercado</span>
              <p>Alimentação</p>
            </div>
          </div>

          <div className={styles.trasationMiddle}>
            <span className={styles.amountNegative}>- R$200,00</span>
          </div>

          <div className={styles.trasationRight}>
            <span>11/08/2026</span>
            <button className={styles.trashButton}>
              <Trash className={styles.trashIcon} />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
