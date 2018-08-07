function xhrAPI(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function request() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const res = JSON.stringify(xhr.responseText);
      callback(res);
    }
  };
  xhr.open("GET", url, true);
  xhr.send();
}
