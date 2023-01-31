const mysql = require("../config/db").sqlDb;

const getLongestMovie = async (req, res) => {
  mysql.query(
    "SELECT tconst, primaryTitle, runtimeMinutes ,genres FROM movies ORDER BY runtimeMinutes DESC LIMIT 10",
    (error, result) => {
      if (error) throw error;
      res.send(result);
    }
  );
};

const addNewMovie = async(req,res)=>{
    const {tconst,primaryTitle ,runtimeMinutes ,genres,titleType}= req.body

    if(!tconst || !primaryTitle || !runtimeMinutes || !genres || !titleType){
        return res.send('please enter all fields')
    }
    let qry = 'INSERT INTO movies values(?,?,?,?,?)';
    mysql.query(qry,[tconst,titleType,primaryTitle,runtimeMinutes ,genres],(err,result)=>{
        if(err) throw err
        return res.send("success")
    })
}
module.exports = { getLongestMovie ,addNewMovie};
