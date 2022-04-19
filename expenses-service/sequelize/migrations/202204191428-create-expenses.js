module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("expenses",{
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER.UNSIGNED
        },
        amount: {
            allowNull: false,
            type: DataTypes.STRING
        },
        eventID: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING
        },
        userID: {
            allowNull: false,
            type: DataTypes.INTEGER.UNSIGNED
        },
        companyID: {
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

module.exports.down = queryInterface => queryInterface.dropTable("expenses");