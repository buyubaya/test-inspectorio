import camelcaseKeys from 'camelcase-keys';

export const getUserDetail = async (userName: string) => {
  const response = await fetch(`${process.env.REACT_APP_GITHUB_ENDPOINT_URL}/users/${encodeURIComponent(userName)}`);
  const json = await response.json();
  return camelcaseKeys(json, { deep: true });
};
