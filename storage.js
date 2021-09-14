
export function useLocalStorage(evt, data = {}){

  if(typeof evt === 'string' && typeof data === 'object'){

    if(evt === 'updatePlayHead' && data.uniquehash){
      window.localStorage.setItem(data.uniquehash, JSON.stringify(data))
      return;
    }

    if(evt === 'getCurrentPlayHead' && data.uniquehash){
      return window.localStorage.getItem(data.uniquehash) || 0;
    }
  }
}

export function exlixirDB(obj)
{
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://localhost:4000/api/videos/create", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({"video": obj}));
  //console.log(JSON.stringify({"video": obj}));
}
