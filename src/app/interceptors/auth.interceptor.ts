import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const excludedUrls = ['/login', '/register'];
  const shouldExclude = excludedUrls.some(url => req.url.includes(url));
  if (shouldExclude) {
    return next(req);
  }
  const sessionKey = localStorage.getItem('session_key');
  if (sessionKey) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${sessionKey}`
      }
    });
  }
  return next(req);
};
