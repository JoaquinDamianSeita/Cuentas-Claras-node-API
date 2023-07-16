const {PORT} = require("./config/globals");

const {app} = require("./server");
const {GetConnected} = require("./db/models/index");

GetConnected().then(()=>{
    app.listen (PORT,()=>console.log(`El servidor esta funcionando ${PORT}`));
}).catch (console.log)
