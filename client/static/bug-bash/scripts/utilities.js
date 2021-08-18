window.getCookie = name => {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1, c.length);
    }

    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }

  return null;
}

window.setCookie = (name, value, minutes) => {
  let expirationFragment = '';

  if (minutes) {
    const date = new Date();
    const ms = minutes * 60 * 1000;
    const expiration = date.getTime() + ms;

    date.setTime(expiration);
    expirationFragment = `; expires=${date.toGMTString()}`;
  }

  document.cookie = `${name}=${value}${expirationFragment}; path=/`;
}

window.loadScript = (url, optCallback) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = url;

  if (typeof optCallback === 'function') {
    script.onload = optCallback;
  }

  document.head.insertAdjacentElement('beforeend', script);
}
