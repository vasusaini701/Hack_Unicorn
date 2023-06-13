const ser = require("express");
const { useContractRead, useContract }= require("@thirdweb-dev/react");
const app = ser();

function App() {
  const { data: contract } = useContract("{{contract_address}}");
  const { data, isLoading, error } = useContractRead(contract, "functionName");
}

app.get("/contract",()=>{
    
})

app.listen("3000",()=>{
    console.log("server started")
});