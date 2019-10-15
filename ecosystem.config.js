module.exports = {
  /**
   * @author Jayamathan Shanmugam
   * @description PM2 Application Configuration
   */
  apps: [
    {
      name: "Jayamathan",
      script: "server/index.js",
      log_date_format: "YYYY-MM-DD HH:mm Z",
      combine_logs: true
    }
  ]
};
