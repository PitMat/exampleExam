import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Moutain} from './models/Moutain';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {
  }

  getAllMoutains(): Observable<Moutain[]> {
    return this.http.get<Moutain[]>(`${environment.localApiUrl}/moutain`);
  }

  getMoutain(id: string): Observable<Moutain> {
    return this.http.get<Moutain>(`${environment.localApiUrl}/moutain/${id}`);
  }

  updateMoutain(moutain: Moutain, id: string): Observable<void> {
    return this.http.put<void>(`${environment.localApiUrl}/moutain/${id}`, moutain);
  }

  addNewMoutain(moutain: Moutain): Observable<void> {
    return this.http.post<void>(`${environment.localApiUrl}/moutain`, moutain);
  }

  delete(moutainId: string): Observable<void> {
    return this.http.delete<void>(`${environment.localApiUrl}/moutain/${moutainId}`);
  }

}

