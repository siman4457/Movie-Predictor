export function findElement(arr, propName, query) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][propName].toLowerCase() == query.toLowerCase()) {
      return arr[i];
    }
  }
  // will return undefined if not found; you could return a default instead
}
