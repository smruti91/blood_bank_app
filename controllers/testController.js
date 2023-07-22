 const testController = (req,res)=>{
  res.status(200).send({
    message: "test rote",
    success: true,
  })
}

module.exports = {testController}