import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-archives',
  imports: [CommonModule],
  templateUrl: './archives.html',
  styleUrl: './archives.css',
})
export class Archives {
  archives = [
    { name: 'Certificate of Enrollment', template: 'Enrollment Cert', by: 'Admin', date: 'Jun 1, 2026', status: 'Completed' },
    { name: 'Graduation Report', template: 'Graduation', by: 'Principal', date: 'May 30, 2026', status: 'Completed' },
    { name: 'Diploma Certificates', template: 'Diploma', by: 'Admin', date: 'May 28, 2026', status: 'Completed' },
  ];
  download(item: any) { console.log('Download:', item.name); }
}