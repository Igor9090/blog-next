export const fetchJson = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsondata = await rawData.json();

  return jsondata;
};
