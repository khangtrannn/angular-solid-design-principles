import { Directive, inject, Input } from "@angular/core";
import { JsonExporterService } from "../json-exporter.service";

@Directive()
export class WidgetBase {
  @Input() title!: string;

  private jsonExportService = inject(JsonExporterService);

  onExportJson(): void {
    this.jsonExportService.export();
  }
}