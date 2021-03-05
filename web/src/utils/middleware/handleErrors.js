export function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

export function handleThrowErrors(response) {
  throw Error("response");
}
