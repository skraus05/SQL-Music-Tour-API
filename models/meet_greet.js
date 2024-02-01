'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      MeetGreet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      MeetGreet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  MeetGreet.init({
    event_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_greet_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meet_Greet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};