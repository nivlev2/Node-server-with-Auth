const doAPiGet = async(_url) => {
  let resp = await fetch(_url);
  let data = await resp.json();
  return data;
}



const doApiMethod = async(_url,_method,_body) => {
  let resp = await fetch(_url, {
    method: _method,
    body: JSON.stringify(_body),
    headers: {
      "x-auth-token":localStorage["tok"],
      'content-type': "application/json"
    }
  })
  let data = await resp.json();
  return data;
}