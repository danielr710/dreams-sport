const PHONE = '573016438472';
const BASE = `https://wa.me/${PHONE}?text=`;

export function waLink(msg: string): string {
  return `${BASE}${encodeURIComponent(msg)}`;
}
