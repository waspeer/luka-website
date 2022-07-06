const cache = new Map<string, string>();

export function getEnvironmentVariable(key: string, defaultValue?: string): string {
  if (cache.has(key)) {
    return cache.get(key)!;
  }

  const value = import.meta.env?.[key] ?? process.env[key];

  if (value === undefined) {
    if (defaultValue === undefined) {
      throw new Error(`Environment variable ${key} is not defined`);
    }

    return defaultValue;
  }

  cache.set(key, value);

  return value;
}
