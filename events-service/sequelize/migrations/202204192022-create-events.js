module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("events",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        typeID: {
            allowNull: false,
            type: DataTypes.INTEGER
        },   
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: DataTypes.DATE
        },
    },{charset:"utf8"})
}

module.exports.down = queryInterface => queryInterface.dropTable("events");