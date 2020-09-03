// Se requiere el paquete de express
var express = require('express')
var app = express()


//Variables de aplicación
app.set('appName','Centro de Capacitación Técnica')
app.set('port', process.env.PORT || 3000)
app.set('view engine','ejs')

// Configurara la carpeta de static
app.use(express.static('public'))


// Ruta principal
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})

//nuevas rutas
app.get('/', (req, res) => {
    var title = app.get('appName')
    res.render('index.ejs', {title: title} )
})
app.get('/nuestrahistoria', (req, res) => {
    var title = app.get('appName')+" | Nuestra Historia"
    res.render('nuestrahistoria.ejs', {title: title} )
    
})


//Rutas admin
app.get('/admin', (req, res) => {
    var title = app.get('appName')+" | admin"
    res.render('admin.ejs', {title: title} )
})

//Nuestra Historia
app.get('/institucional', (req, res) => {
    var title = app.get('appName')+" | Institucional"
    res.render('institucional.ejs', {title: title} )
})

//Noticias
app.get('/noticias', (req, res) => {
    var title = app.get('appName')+" | Noticias"
    res.render('noticias.ejs', {title: title} )
})

//Contactos
app.get('/contactos', (req, res) => {
    var title = app.get('appName')+" | Contactos"
    res.render('contactos.ejs', {title: title} )
})

//Academico
app.get('/academico', (req, res) => {
    var title = app.get('appName')+" | Academico"
    res.render('academico.ejs', {title: title} )
})

// Levanta el servidor
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
