module.exports.up = (queryInterface,DataTypes) => {
    return queryInterface.createTable("outsourcing",{
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.UUID
        },
        companyName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phone: {
            allowNull: false,
            type: DataTypes.STRING
        },
        contact: {
            allowNull: false,
            type: DataTypes.STRING
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

module.exports.down = queryInterface => queryInterface.dropTable("outsourcing");