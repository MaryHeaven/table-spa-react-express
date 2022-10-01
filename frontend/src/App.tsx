import React, { FC, useEffect, useState } from 'react';
import './App.css';
import usePagination from './hooks/usePagination';



interface UsePaginationProps {
  contentPerPage: number;
  count: number;
}

interface UsePaginationReturn {
  page: number;
  totalPages: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  firstContentIndex: number;
  lastContentIndex: number;
  gaps: { before: boolean; paginationGroup: number[]; after: boolean };
}

// type UsePagination = (arg0: UsePaginationProps) => UsePaginationReturn;

const App: FC = () => {
  const [offset] = useState(0);
  const [res, setRes] = useState<[]>([]);
  const [sortState, setSortState] = useState<string | any >('none');

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    gaps,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: res.length,
  });
  

  useEffect(() => {
    fetch("http://localhost:4000/api")
      .then((response) => response.json())
      .then(data => setRes(data))

      .catch((error) => setError(error.message))
      .finally(() => setLoading(false))
  }, [offset]);

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSortState(e.currentTarget.value);
  }

  const sortMethods = {
    none: { method: (a: any, b: any) => a - b },
    sortTitle_A_Z: { method: (a: { title: { toLowerCase: () => number; }; }, b: { title: { toLowerCase: () => number; }; }) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1) },
    sortTitle_Z_A: { method: (a: { title: { toLowerCase: () => number; }; }, b: { title: { toLowerCase: () => number; }; }) => (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1) },
    sortQuantity_1_100: { method: (a: { quantity: number; }, b: { quantity: number; }) => a.quantity - b.quantity },
    sortQuantity_100_1: { method: (a: { quantity: number; }, b: { quantity: number; }) => b.quantity - a.quantity },
    sortDistance_1_100: { method: (a: { distance: number; }, b: { distance: number; }) => a.distance - b.distance },
    sortDistance_100_1: { method: (a: { distance: number; }, b: { distance: number; }) => b.distance - a.distance },
  };

  return (
    <div className="App">
      <div className='sorting'>
        <p>Сортировать по </p>
        <select onChange={(e) => handleSort(e)} id="sort">
          <option value={'sortTitle_A_Z'}>Названию (А - Я)</option>
          <option value={'sortTitle_Z_A'}>Названию (Я - А)</option>
          <option value={'sortQuantity_1_100'}>Количеству - от меньшего</option>
          <option value={'sortQuantity_100_1'}>Количеству - от большего</option>
          <option value={'sortDistance_1_100'}>Расстоянию - от меньшего</option>
          <option value={'sortDistance_100_1'}>Расстоянию - от большего</option>
        </select>
      </div>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Ошибка</h2>
      ) : (
        <>
        <div className="pagination">
            <p className="text">
              {page}/{totalPages}
            </p>
            <button
              onClick={prevPage}
              className={`page ${page === 1 && "disabled"}`}
            >
              &larr;
            </button>
            <button
              onClick={() => setPage(1)}
              className={`page ${page === 1 && "disabled"}`}
            >
              1
            </button>
            {gaps.before ? "..." : null}
            {/* @ts-ignore */}
            {gaps.paginationGroup.map((el) => (
              <button
                onClick={() => setPage(el)}
                key={el}
                className={`page ${page === el ? "active" : ""}`}
              >
                {el}
              </button>
            ))}
            {gaps.after ? "..." : null}
            <button
              onClick={() => setPage(totalPages)}
              className={`page ${page === totalPages && "disabled"}`}
            >
              {totalPages}
            </button>
            <button
              onClick={nextPage}
              className={`page ${page === totalPages && "disabled"}`}
            >
              &rarr;
            </button>
          </div>
          </>
      )}
      <table className="table">
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {res.sort(sortMethods[sortState as keyof typeof sortMethods].method).slice(firstContentIndex, lastContentIndex).map((el: { date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; distance: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) =>
            <tr>
              <td>{el.date}</td>
              <td>{el.title}</td>
              <td>{el.quantity}</td>
              <td>{el.distance}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
