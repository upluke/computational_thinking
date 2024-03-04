const API_ROOT = "http://localhost:3000/api"; // back end api; here's pointg to the backend

export function serverPath(path: string) {
  return `${API_ROOT}${path}`;
}
