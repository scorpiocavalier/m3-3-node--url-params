'use strict'

const express = require('express')
const morgan = require('morgan')
const { top50 } = require('./data/top50')
const { books } = require('./data/books')
const handlers = require('./public/js/handlers')

const PORT = process.env.PORT || 8000

const app = express()

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')

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
    const { number } = req.params
    if(number > 0 && number <= 50)
        res.status(200)
            .render('pages/singleSong', { 
                title: `Song #${number}`,
                songs: top50,
                number
            })
    else
        res.status(404)
            .render('pages/fourOhFour', {
                title: 'I got nothing',
                path: req.originalUrl
            })
})

app.get('/books', (req, res) => {
    res.render('pages/books', { 
        title: 'All Books',
        books
    })
})

app.get('/books/:id', (req, res) => {
    const { id } = req.params
    if(id > 100 && id <= 125)
        res.status(200)
            .render('pages/singleBook', { 
                title: `Book #${id}`,
                books,
                id
            })
    else
        res.status(404)
            .render('pages/fourOhFour', {
                title: 'I got nothing',
                path: req.originalUrl
            })
})

app.get('/books/:type', (req, res) => {
    const { type } = req.params
    const booksByType = handlers.getBooksByType(books, type)

    res.render('pages/books', {
        title: `${type} Books`,
        books: booksByType
    })
})

app.get('/', (req, res) => {
    res.render('pages/', { title: 'Home' })
})

// handle 404s
app.get('*', (req, res) => {
    res.status(404)
        .render('pages/fourOhFour', {
            title: 'I got nothing',
            path: req.originalUrl
        })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
