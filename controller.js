const connection = require('./db') //  connection instance
const liveGame = require('./liveGame');


module.exports = {
     async getLiveGameCruices(req,res,next)
    {
            const result = await liveGame.find({}).sort({score:-1});
            if(result)
                res.status(200).json(result);
            else
                res.status(404).send('not found');
    },
     async setLiveGameScore(req,res,next)
    {
            const {userId = null} = req.params;
            const {score = null, time = null} = req.body;
            const result = await liveGame.updateOne({userId},{score,time});

            if(result) res.json(result)
            else res.status(404).send('not found');
                  
    },
     async getCruiseByYearCompetitor(req,res,next)
    {
        const{
            year = null,
            competitor = null
        } = req.body
        const result = await liveGame.find({"date":year,"competitor":competitor})

        if(result) res.json(result);
        else res.status(500).send(err.message);
    }
}