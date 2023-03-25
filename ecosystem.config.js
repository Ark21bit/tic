module.exports = {
  apps: [
    {
      name: "KazanTravel",
      port: '3000',
      exec_mode: 'cluster',
      instances: '1', // Or a number of instances
      script: "./.output/server/index.mjs",
      args: "start",
    },
  ],
}
