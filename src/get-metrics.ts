import { XMLParser } from "fast-xml-parser";

const template = { CURRENTLISTENERS: 0 };

export const getMetrics = async (url: string) => {
  try {
    const response = await fetch(url);
    const xmlData = await response.text();

    const parser = new XMLParser();
    const parsedData = parser.parse(xmlData);

    const listeners = parsedData.SHOUTCASTSERVER?.CURRENTLISTENERS || template.CURRENTLISTENERS;

    return Number(listeners);
  } catch (error) {
    console.error(`Error fetching or parsing from ${url}:`, error);
    return template.CURRENTLISTENERS;
  }
};
