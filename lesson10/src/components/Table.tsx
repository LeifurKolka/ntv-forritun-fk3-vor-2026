// TODO: Make this component generic over the row data type.
// `columns` should be an array where each column's `index` is constrained to `keyof T`,
// `header` is a string, and the optional `render` function receives the cell value
// (typed as T[K]) and the full row (typed as T).
// `data` should be T[].
// This ensures that typos in column indexes are caught at compile time.

type RowData = {
  value: string
}

type Row<T extends RowData = RowData> = {
  id: string
} & T

type Column<T extends Row, K extends keyof T & (string | number) = keyof T & (string | number)> = {
  header: string
  index: K
  render?: (cellValue: T[K], row: T) => string
}

type TableProps<T extends Row, K extends keyof T & (string | number) = keyof T & (string | number)> = {
  data: T[]
  columns: Column<T, K>[]
  className: string
}


function Table<T extends Row>({ data, columns, className }: TableProps<T>) {
  return (
    <table className={`w-full border-collapse ${className || ''}`}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.index} className="border-b p-2 text-left font-semibold">
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index: number) => (
          <tr key={row.id ?? index}>
            {columns.map((col) => (
              <td key={col.index} className="border-b p-2">
                {col.render
                  ? col.render(row[col.index], row)
                  : String(row[col.index])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}