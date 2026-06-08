import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  students = [
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', cgpa: '4.0', status: 'Active' },
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', cgpa: '4.0', status: 'Active' },
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', cgpa: '4.0', status: 'Active' },
  ];
  reports = [
    { name: 'Monthly Student Report', type: 'Class', by: 'Principal', date: 'May 30, 2026' },
    { name: 'Graduation Report', type: 'Class', by: 'Principal', date: 'May 30, 2026' },
    { name: 'Diploma Certificates', type: 'Certificate', by: 'Principal', date: 'May 30, 2026' },
  ];
}