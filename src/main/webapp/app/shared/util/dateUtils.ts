export class DateUtils {
  private static qtdMilisEmUmDia = 24 * 60 * 60 * 1000;
  private static qtdMilisEmUmaHora = 60 * 60 * 1000;

  public static convertTimeToDateNow(time: string): any {
    if (time === null || time === undefined || time.length < 5) {
      return null;
    }
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDay(), Number(time.substring(0, 2)), Number(time.substring(3, 5)));
  }

  public static convertDateToTime(date: Date): any {
    if (date === null || date === undefined) {
      return null;
    }
    return new Date(date).toLocaleTimeString();
  }

  public static getLastDayMonth(day: Date): Date {
    return new Date(day.getFullYear(), day.getMonth() + 1, 0);
  }

  public static getFirstDayMonth(day: Date): Date {
    return new Date(day.getFullYear(), day.getMonth(), 1);
  }
}
