var azure = require('azure-storage');
var tableService = azure.createTableService();
var query = new azure.TableQuery().top(1000);

function DbContext(tablename) {
    this.tableName = tablename;
}

DbContext.prototype.Init = function() {return new Promise((resolve,reject)=>{
    tableService.createTableIfNotExists(this.tableName, (error, result, response)=>{
        if (!error) {
            resolve("Done!")
        }
        else {
            reject(error)
        }
    });
})
}
    
DbContext.prototype.GetAll = function() { return new Promise((resolve, reject)=>{
    tableService.queryEntities(this.tableName, query, null, (error, result, response)=>{
        if (!error) {
          resolve(result.entries)
        }
        else reject(error)
      });
})
}

DbContext.prototype.AddItem = function(item) { return new Promise((resolve, reject)=>{
    
})}

module.exports = DbContext