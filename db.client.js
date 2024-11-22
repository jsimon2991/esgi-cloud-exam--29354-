const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  postgresql:'//esgi_cloud_db_29354_user:AQKHRIOhh1AVEk0DLitqA703J4H7JszU@dpg-ct0419i3esus7385vl2g-a/esgi_cloud_db_29354',
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;