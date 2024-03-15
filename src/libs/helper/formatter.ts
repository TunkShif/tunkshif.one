import { intlFormat } from "date-fns"

export const toIntlFormatDate = (date: Date, locale = "en-US") =>
  intlFormat(date, { year: "numeric", month: "short", day: "numeric" }, { locale })
