import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-report',
  imports: [CommonModule, FormsModule],
  templateUrl: './generate-report.html',
  styleUrl: './generate-report.css',
})
export class GenerateReport {
  templateName = '';
  schoolYear = '2025-2026';
  term = '1st Semester';
  gradeLevel = 'Grade 11';
  section = 'AXX';

  students = [
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', status: 'Active', selected: false },
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', status: 'Active', selected: false },
    { id: '12XXXXX', name: 'John Doe', section: 'AXX', status: 'Active', selected: false },
  ];

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.templateName = params['templateName'] || 'No template selected';
    });
  }

  get selectedCount() { return this.students.filter(s => s.selected).length; }
  get allSelected() { return this.students.every(s => s.selected); }

  toggleAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.students.forEach(s => s.selected = checked);
  }

  generateReport() {
    const selected = this.students.filter(s => s.selected);
    console.log('Generating for:', selected);
  }
}