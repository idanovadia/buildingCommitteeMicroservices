module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("groups",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        link: {
            allowNull: false,
            type: DataTypes.STRING
        },
        addressID: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED
        },
        managerID: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED
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

module.exports.down = queryInterface => queryInterface.dropTable("groups");