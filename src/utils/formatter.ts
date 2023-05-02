import { format } from "date-fns"
import readingTime from "reading-time"

export const formatDate = (date: string, options?: { numeric?: boolean }) =>
  format(new Date(date), options?.numeric ? "yyy-MM-dd" : "MMM dd, yyy")

export const estimatedReadingTime = (text: string) => readingTime(text).text
