import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templates',
  imports: [CommonModule],
  templateUrl: './templates.html',
  styleUrl: './templates.css',
})
export class Templates {
  templates = [
    { id: 1, name: 'TEMPLATE 1' },
    { id: 2, name: 'TEMPLATE 2' },
    { id: 3, name: 'TEMPLATE 3' },
    { id: 4, name: 'TEMPLATE 4' },
    { id: 5, name: 'TEMPLATE 5' },
  ];
  constructor(private router: Router) {}
  openTemplate(id: number, name: string) {
    this.router.navigate(['/generate-report'], { queryParams: { templateId: id, templateName: name } });
  }
}