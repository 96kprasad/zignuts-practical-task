export const api = {
  get: (url) => fetch(url),
  post: (url, data) => fetch(url, { method: 'POST', body: JSON.stringify(data) })
}