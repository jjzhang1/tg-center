const withLess = require("next-plugin-less");

module.exports = withLess({
  compress: true,
  webpack: (config, { isServer, webpack }) => {
    config.module.rules.push({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
        {
          loader: "less-loader",
          options: {
            lessOptions: {
              modifyVars: {
                // 如果需要自定义主题
                "primary-color": "#1DA57A",
                "link-color": "#1DA57A",
                "border-radius-base": "2px",
              },
              javascriptEnabled: true,
            },
          },
        },
      ],
    });

    return config;
  },
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
