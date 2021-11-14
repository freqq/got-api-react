export const getURLParams = (search: string): any => {
  let hashes = search.slice(search.indexOf('?') + 1).split('&');

  return hashes.reduce((params, hash) => {
    let [key, val] = hash.split('=');
    return Object.assign(params, { [key]: decodeURIComponent(val) });
  }, {});
};

export const extractURLFromLinkResponseHeader = (linkHeader: string): string => {
  const splitedString = linkHeader.split(',').pop();
  return splitedString ? splitedString.split(';')[0].replace(/[<|>]/g, '').trim() : '';
};
