'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage }) {
      SetTime.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })
      SetTime.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
      SetTime.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  SetTime.init({
    event_id: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_times',
    timestamps: false
  });
  return SetTime;
};