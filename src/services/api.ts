const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:5000'

async function http(method: string, url: string, body?: any) {
  const res = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  })
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `HTTP ${res.status}`)
  }
  const ct = res.headers.get('content-type') || ''
  if (ct.includes('application/json')) return res.json()
  return res.text()
}

export function getAllItems() { return http('GET', `${API_BASE}/stockapi/StockItem/GetAll`) }
export function addItem(name: string) { return http('POST', `${API_BASE}/stockapi/StockItem/AddStockItem`, { name }) }
export function updateItem(id: number, name: string) { return http('POST', `${API_BASE}/stockapi/StockItem/UpdateStockItem`, { id, name }) }
export function deleteItem(id: number) { return http('DELETE', `${API_BASE}/stockapi/StockItem/DeleteStockItem?id=${encodeURIComponent(id)}`) }