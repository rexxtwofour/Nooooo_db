let id =0;
let players = [
{
    id: 1,
    firstName: "Michale Amadio",
    position: "Forward",
    number: 52,
    comments: "",
               
},
{
    id: 2,
    firstName: "Dustin Brown",
    position: "Forward",
    number: 23,
    comments: "",
},
{
    id: 3,
    firstName: "Kyle Clifford",
    position: "Forward",
    number: 13,
    comments: "",
},
{
    id: 4,
    firstName: "Jeff Carter",
    position: "Forward",
    number: 77,
    comments: "",
},
{
    id: 5,
    firstName: "Alex LaFallo",
    position: "Forward",
    number: 19,
    comments: "",
},
{
    id: 6,
    firstName: "Adrain Kempe",
    position: "Forward",
    number: 9,
    comments: ""
}
,{
    id: 7,
    firstName: "Anze Kopitar",
    position: "Forward",
    number: 11,
    comments: "",
},
{
    id: 8,
    firstName: "Trevor Lewis",
    position: "Forward",
    number: 22,
    comments: "",
},
{
    id: 9,
    firstName: "Trevor Lewis",
    position: "Forward",
    number: 22,
    comments: "",
},
{
    id: 10,
    firstName: "Torrey Mitchell",
    position: "Forward",
    number: 71,
    comments: "",
},
{
    id: 11,
    firstName: "Tanner Pearson",
    position: "Forward",
    number: 70,
    comments: "",
},
{
    id: 12,
    firstName: "Tobias Rieder",
    position: "Forward",
    number: 10,
    comments: "",
},
{
    id: 13,
    firstName: "Nate Thompson",
    position: "Forward",
    number:44,
    comments: "",
},
{
    id: 14,
    firstName: "Tyler Toffoli",
    position: "Forward",
    number: 73,
    comments: "",
},
{
    id: 15,
    firstName: "Ilya Kovalchuck",
    position: "Forward",
    number: 00,
    comments:"",
},
{
    id: 16,
    firstName: "Drew Doughty",
    position: "Defense",
    number: 8,
    comments: "",
},
{
    id: 17,
    firstName: "Christian Folin",
    position: "Defense",
    number: 5,
    comments: "",
},
{
    id: 18,
    firstName: "Derek Forbort",
    position: "Defense",
    number: 24,
    comments: "",
},
{
    id: 19,
    firstName: "Kevin Gravel",
    position: "Defense",
    number: 53,
    comments: "",
},
{
    id: 20,
    firstName: "Paul LaDue",
    position: "Defense",
    number:44,
    comments: "",
},
{
    id: 21,
    firstName: "Alec Martinez",
    position: "Defense",
    number: 27,
    comments: "",
},
{
    id: 22,
    firstName: "Jake Muzzin",
    position: "Defense",
    number: 6,
    comments: "",
},
{
    id: 23,
    firstName: "Dion Phaneuf",
    position: "Defense",
    number: 3,
    comments: "",
},
{
    id: 24,
    firstName: "Peter Budaj",
    position: "Goalies",
    number: 27,
    comments: "",
},
{
    id: 25,
    firstName: "Jack Cambell",
    position: "Goalies",
    number: 1,
    comments: "",
},
{
    id: 26,
    firstName: "Johnathan Quick",
    position: "Goalies",
    number: 32,
    comments: "",
}
]







module.exports = {
    create: ( req, res ) => {
   console.log('create----', req.body)
        const { firstName, number, position } = req.body;
        players.push({ id:players.length + 1,firstName, number, position});
        id++;
        res.status(200).send(players);
        
    },

    read: ( req, res ) => {
        console.log('read')
     res.status(200).send(players)

    },

    update: ( req, res ) => {
        console.log("this is updating",req.body)
        console.log("this is updating",req.params.id)
        const { firstName, position, number} = req.body;
        const playersID = req.params.id;
        const playersIndex = players.findIndex( players => players.id == playersID);
        let player = players[ playersIndex ]; 

        players[ playersIndex ] = {
            id: player.id,
            firstName: firstName || player.firstName,
            position: position || player.position,
            number: number || player.number,            
        };
        
        res.status(200).send(players);
    },

    delete: ( req, res ) => {
        console.log('hey did this work',req.params)
        const playerID = req.params.id;
        playersIndex = players.findIndex(players => players.id == playerID );
        players.splice(playersIndex,1);
        res.status(200).send(players);
    }
}











