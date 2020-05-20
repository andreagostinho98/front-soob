import { CalendarUtil } from './calendarUtil';
import { TranslateService } from '@ngx-translate/core';

export class CalendaBase {
  calendarLocale: any = CalendarUtil.calendarLocale;

  constructor(private translateCalendar: TranslateService) {}

  carregarLocale(): any {
    this.calendarLocale = CalendarUtil.calendarTranslate(this.translateCalendar);
  }
}
