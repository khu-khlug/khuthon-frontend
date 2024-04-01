export function isTokenFor(token: string, role: string) {
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.role === role;
  } catch (e) {
    return false;
  }
}
