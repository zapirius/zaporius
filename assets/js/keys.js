class Keys {
  constructor() {
    this.keys = [];

    document.addEventListener('keydown', e => {
      this.set(e.key);
    })
    document.addEventListener('keyup', e => {
      this.unset(e.key);
    })
  }

  set(key) {
    const item = key.toLowerCase
    this.keys[item] = true;
  }

  unset(key) {
    const item = key.toLowerCase
    this.keys[item] = false;
  }

  press(key) {
    const item = key.toLowerCase
    return this.keys[item] === true;
  }
}