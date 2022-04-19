module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("users",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING
        },
        addressID: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED
        },
        password:{
            allowNull: false,
            type: DataTypes.CHAR(64)
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        groupID: {
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

module.exports.down = queryInterface => queryInterface.dropTable("users");