const withLess = require("next-plugin-less");

module.exports = withLess({
  compress: true,
  async rewrites() {
    const env = process.env.NODE_ENV;
    const testUrl = "http://44.214.134.96:8888";
    const prodUrl = "http://balance.game:8888";
    const destination = env === "production" ? prodUrl : testUrl;
    return [
      {
        source: "/api/:path*",
        destination: `${destination}/api/:path*`, // 代理到后端API
      },
    ];
  },
});
