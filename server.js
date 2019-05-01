const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let state = {
    comics: [],
    funnyComics: [],
    notFunnyComics: []
}

const port = process.env.port || 8060;
app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})

app.post('/api/loadComics', (req, res)=> {
    state.comics = req.body
    res.send(state.comics)
  })

app.put('/api/updateFunnyComics', (req, res)=>{
    state.funnyComics = [...state.funnyComics, state.comics.filter(e => e.num === req.body.data)];
    state.comics = state.comics.filter(e => e.num !== req.body.data);
    res.send(state);
})

app.put('/api/updateNotFunnyComics', (req, res)=>{
    state.notFunnyComics = [...state.notFunnyComics, state.comics.filter(e => e.num === req.body.data)];
    state.comics = state.comics.filter(e => e.num !== req.body.data);
    res.send(state);
})