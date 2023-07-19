/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
    serverBuildTarget: "vercel",
    server: process.env.NODE_ENV === "development" ? undefined : "./server.js",
    ignoredRouteFiles: ["**/.*"],
    future: {},
    mdx: async (filename) => {
        const [rehypeHighlight] = await Promise.all([import("rehype-highlight").then((mod) => mod.default)]);
        return {
            rehypePlugins: [rehypeHighlight],
        };
    },
    // appDirectory: "app",
    // assetsBuildDirectory: "public/build",
    // serverBuildPath: "build/index.js",
    // publicPath: "/build/",
};
