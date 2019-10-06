export function renderPaginatedData(data, activePage, itemsPerPage) {
  const lastItem = activePage * itemsPerPage
  const firstItem = lastItem - itemsPerPage
  return data.slice(firstItem, lastItem)
}
