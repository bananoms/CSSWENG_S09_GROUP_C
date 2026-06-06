import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [JsonPipe],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private http = inject(HttpClient);

  templates = signal<any[]>([]);
  errorMessage = signal<string>('');

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/api/templates').subscribe({
      next: (data) => {
        this.templates.set(data);
        console.log('Successfully connected to Spring Boot!', data);
      },
      error: (err) => {
        console.error('Failed to connect to Spring Boot API', err);
        this.errorMessage.set('Failed to connect to the backend. Is Spring Boot running?');
      }
    });
  }
}