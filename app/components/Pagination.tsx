type PaginationProps = {
  label: string;
  page: number;
  pageCount: number;
  indented?: boolean;
  onChange: (page: number) => void;
};

export function Pagination({
  label,
  page,
  pageCount,
  indented = false,
  onChange,
}: PaginationProps) {
  return (
    <div className={`pagination${indented ? ' pagination-indented' : ''}`} aria-label={label}>
      <button type="button" onClick={() => onChange(page - 1)} disabled={page === 0}>
        Previous
      </button>
      <span>
        {page + 1} / {pageCount}
      </span>
      <button type="button" onClick={() => onChange(page + 1)} disabled={page === pageCount - 1}>
        Next
      </button>
    </div>
  );
}
