export function renderPaginatedData(data, activePage, itemsPerPage) {
  const lastItem = activePage * itemsPerPage
  const firstItem = lastItem - itemsPerPage
  if (!data) {
    return []
  }
  return data.slice(firstItem, lastItem)
}
