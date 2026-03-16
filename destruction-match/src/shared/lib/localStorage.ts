export const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch {
      return null;
    }
  },
  set: (key: string, value: unknown): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      console.error("localStorage 저장 실패");
    }
  },
  remove: (key: string): void => localStorage.removeItem(key),
};
