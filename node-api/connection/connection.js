var sql = require('mssql');
var connect = new function () {
    var conn = new sql.ConnectionPool({
        user: 'Sample',
        password: 'Testing@123',
        server: 'IN11W-SRINIVA-8\\EASYDIRECT',
        database: 'TimeSheetDB'
    });
    return conn;
}

module.exports = connect;