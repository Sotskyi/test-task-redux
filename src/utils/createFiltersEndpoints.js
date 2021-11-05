export const createFilterEndpoints = (mainEndpoint, options) => {
  console.log(options);
  let endpoint = `${mainEndpoint}/?`;
  for (const property in options) {
    if (options[property]) {
      endpoint += `${property}=${options[property]}&`;
    }
  }
  console.log(endpoint);
  return endpoint;
};
