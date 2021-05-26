export default {
  
  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },

  waitFor(conditionFn, callback, interval = 50, expiration = 20000) {
    const conditionFnResult = conditionFn();
    if (conditionFnResult === 'abort') return;
    else if (conditionFnResult) callback(conditionFnResult);
    else if (expiration <= 0) return;
    else {
      expiration -= interval;
      return setTimeout(this.waitFor.bind(this, conditionFn, callback, interval, expiration), interval);
    }
  },

  loadScript(url, optCallback) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
  
    if (typeof optCallback === 'function') {
      script.onload = optCallback;
    }
  
    document.head.insertAdjacentElement('beforeend', script);
  }
}