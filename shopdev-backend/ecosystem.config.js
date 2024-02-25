module.exports = {
  apps: [
    {
      name: "shopdev-backend",
      script: "./server.js",
      // exec_mode: "cluster",
      instances: 1,
      //   watch: true,
      //   ignore_watch: ["node_modules"],
      env_production: {
        NODE_ENV: "production",
      },
      env_development: {
        NODE_ENV: "development",
      },
      out_file: "./logs/shopdev-backend.log", // stdout log file, default is /dev/null, write logs/shopdev-backend.log
      error_file: "./logs/err-shopdev-backend.log",
    },
  ],
};
