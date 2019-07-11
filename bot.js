const config=require('./config')
const twit=require('twit')
const T=new twit(config)
function retweet()
{
let params={
    q:'#OnePlusMirrorBlue',
    count:10
}
T.get('search/tweets',params,(err,data,response)=>{
let tweets=data.statuses

if (!err)
{            
for(let dat of tweets)
{
    let retweetId = dat.id_str;
    T.post('statuses/retweet/:id', {id: retweetId},(err, response)=>
    {
    if (response) 
        console.log('Retweeted!!! '+ retweetId)
    if (err) 
        console.log('Something went wrong while RETWEETING... Duplication maybe...')
    }
    )
}
}
}
)
}
setInterval(retweet,1000)































// T.post('statuses/update',{status:`hey #ThursdayThoughts#WorldPopulationDay`},(err,data,response)=>{
//     console.log(data)
// // })
// let stream=T.stream('user')
// stream.on('follow',(eventMsg)=>{
//     let name=eventMsg.source.name;
//     let screenName=eventMsg.source.screen_name;
//     console.log(112)
// })