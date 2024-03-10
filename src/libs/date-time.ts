import { intlFormat } from "date-fns"

export const format = (date: Date, locale = "en-US") =>
  intlFormat(date, { year: "numeric", month: "short", day: "numeric" }, { locale })
