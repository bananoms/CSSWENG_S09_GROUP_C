import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfDesigner } from './pdf-designer';

describe('PdfDesigner', () => {
  let component: PdfDesigner;
  let fixture: ComponentFixture<PdfDesigner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfDesigner],
    }).compileComponents();

    fixture = TestBed.createComponent(PdfDesigner);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
