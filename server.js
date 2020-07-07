'use strict';

const express = require('express')
const morgan = require('morgan');
const { top50 } = require('./data/top50');
const handlers = require('./public/js/handlers')

const PORT = process.env.PORT || 8000;

const app = express();

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');

// endpoints here
app.get('/top50', (req, res) => {
    res.render('pages/top50', { 
        title: 'Top 50 Songs Streamed on Spotify',
        songs: top50
    })
})

app.get('/top50/popular-artist', (req, res) => {
    const popularArtist = handlers.getPopularArtist(top50)

    res.render('pages/top50', {
        title: 'Most Popular Artist',
        songs: popularArtist
    })
})

app.get('/top50/song/:number', (req, res) => {
    const number = req.params.number
    res.render('pages/singleSong', { 
        title: `Song #${number}`,
        songs: top50,
        number 
    })
})

app.get('/', (req, res) => {
    res.render('pages/', { title: 'Home' })
})

// handle 404s
app.get('*', (req, res) => {
    res.status(404);
    res.render('pages/fourOhFour', {
        title: 'I got nothing',
        path: req.originalUrl
    });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
