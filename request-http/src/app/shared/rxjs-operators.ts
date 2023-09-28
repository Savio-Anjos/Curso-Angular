import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { filter, map, pipe, UnaryFunction, Observable, tap } from 'rxjs';

export function filterResponse<T>(): UnaryFunction<
  Observable<HttpEvent<T>>,
  Observable<HttpResponse<T>>
> {
  return pipe(
    filter(
      (event: HttpEvent<T>): event is HttpResponse<T> =>
        event instanceof HttpResponse
    ),
    map((res: HttpResponse<T>) => res)
  );
}

export function uploadProgress<T>(cb: (progress: number) => void) {
  return tap((event: HttpEvent<T>) => {
    if (event.type === HttpEventType.UploadProgress) {
      cb(Math.round((event.loaded * 100) / event.total!));
    }
  });
}
