import format from "date-fns/format";
export function dateFormat ( date: string, schema: string) : string {
    return format(new Date(date), schema);
}