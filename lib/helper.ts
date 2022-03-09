import dayjs from "dayjs";

export const date = (str: string) => dayjs(str).format("MM/DD/YYYY")
