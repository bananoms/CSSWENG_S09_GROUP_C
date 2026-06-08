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
  // TODO: connect images to db??
  templates = [
    { id: 1, name: 'TEMPLATE 1', image: 'assets/templates/template1.png' },
    { id: 2, name: 'TEMPLATE 2', image: 'assets/templates/template1.png' },
    { id: 3, name: 'TEMPLATE 3', image: 'assets/templates/template1.png' },
    { id: 4, name: 'TEMPLATE 4', image: 'assets/templates/template1.png' },
    { id: 5, name: 'TEMPLATE 5', image: 'assets/templates/template1.png' },
    { id: 6, name: 'TEMPLATE 6', image: 'assets/templates/template1.png' },
    { id: 7, name: 'TEMPLATE 7', image: 'assets/templates/template1.png' },
  ];

  constructor(private router: Router) {}

  openTemplate(id: number, name: string) {
    this.router.navigate(['/generate-report'], {
      queryParams: { templateId: id, templateName: name },
    });
  }

  addTemplate() {
    // TODO: wire up template creation flow
    console.log('Add template clicked');
  }
}