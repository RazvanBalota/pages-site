import { parse } from "https://deno.land/x/xml@2.1.1/mod.ts";

export const currencyExchangeRate = async (from: string) => {
  const referenceSheet =
    "https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml";
  const response = await fetch(referenceSheet);
  const xml = await response.text();
  const parsed = parse(xml);
  return (parsed["gesmes:Envelope"] as any)["Cube"]["Cube"]["Cube"].find(
    (e: any) => e["@currency"] === from,
  )["@rate"];
};
