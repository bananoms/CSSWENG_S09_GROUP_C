import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Template } from '@pdfme/common';
import { Designer } from '@pdfme/ui';
import { text, barcodes, image, multiVariableText, rectangle, ellipse, line, table } from '@pdfme/schemas';

const PLUGINS = {
  Text: text,
  'Multi-var Text': multiVariableText,
  'QR Code': barcodes.qrcode,
  'Barcode': barcodes.code128,
  Image: image,
  Table: table,
  Line: line,
  Rectangle: rectangle,
  Ellipse: ellipse,
};

@Component({
  selector: 'app-pdf-designer',
  standalone: true,
  imports: [],
  templateUrl: './pdf-designer.html',
  styleUrl: './pdf-designer.css',
})

export class PdfDesigner implements AfterViewInit, OnDestroy {
  private designer!: Designer;

  ngAfterViewInit() {
    const template: Template = {
      basePdf: { width: 297, height: 210, padding: [10, 10, 10, 10] },
      schemas: [[]],
    };

    this.designer = new Designer({
      domContainer: document.getElementById('designer') as HTMLElement,
      template,
      options: { zoomLevel: 1, sidebarOpen: true },
      plugins: PLUGINS,
    });
  }

  ngOnDestroy() {
    this.designer?.destroy();
  }
}
