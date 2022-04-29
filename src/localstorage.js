export const storage = {
  playbackid: "",
  get: function () {
    var data = JSON.parse(window.localStorage.getItem(JSON.stringify(storage.playbackid)));
    return data ? data : {};
  },
  set: function (data = {}) {
    if (Object.keys(data).length >= 0) {
      window.localStorage.setItem(JSON.stringify(storage.playbackid), JSON.stringify(data.playhead));
    }
  },
  clear: function () {
    window.localStorage.clear();
  },
  remove: function () {
    window.localStorage.removeItem(JSON.stringify(storage.playbackid));
    console.log(JSON.stringify(storage.playbackid));
  },
  isSupported: function () {
    if (typeof (Storage) !== "undefined") {
      return true;
    } else {
      return false;
    }
  }
};