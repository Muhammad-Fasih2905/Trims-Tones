import { site } from "@/data/site";

export default function sitemap() {
  const routes = ["", "/services", "/deals", "/membership", "/contact"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: r === "" ? "weekly" : "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
