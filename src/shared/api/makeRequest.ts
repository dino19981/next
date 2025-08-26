interface Args {
  url: string | URL | globalThis.Request;
  fetchOptions?: RequestInit;

  entityName: string;
}

export const makeRequest = async ({ url, fetchOptions, entityName }: Args) => {
  try {
    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      const errorText = await response.text().catch(() => '');
      throw new Error(
        `Failed to fetch ${entityName}: ${response.status} ${
          response.statusText
        }${errorText ? ` - ${errorText}` : ''}`
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error instanceof Error
      ? error
      : new Error(`Unknown error while fetching ${entityName}`);
  }
};
