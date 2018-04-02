var count = 12
var images = [{
	"url": "https://images.unsplash.com/photo-1520864275947-5ddafc397fa9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5d5d7ca7227766fe508c0c42eac7a095&auto=format&fit=crop&w=1267&q=80",
	"name": "Lønfeldt",
    "imgTitle": "artbylonfeldt",
    "id": "1"
},{
	"url": "https://images.unsplash.com/photo-1509793856049-e9c0298b4ce7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1af97d5ff7925d2ef8a296e4ac2d311&auto=format&fit=crop&w=1351&q=80",
	"name": "Ricardo Gomez Angel",
    "imgTitle": "Ripato",
    "id": "2"
},{
	"url": "https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5257b32f41a8a970f1b644c88174cee5&auto=format&fit=crop&w=1952&q=80",
	"name": "Gem & Lauris RK",
    "imgTitle": "aplaceforcreation",
    "id": "3"
},{
	"url": "https://images.unsplash.com/photo-1476813001184-9044d31e0ad1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8416d3fc2f4bed25a2a36fb687ccd0d0&auto=format&fit=crop&w=1350&q=80",
	"name": "Maxime Le Conte des Floris",
    "imgTitle": "mlcdf",
    "id": "4"
},{
	"url": "https://images.unsplash.com/photo-1476249202953-93ec0d185ab7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f4133c6d451a52c0feacabbc6d1a6780&auto=format&fit=crop&w=1350&q=80",
	"name": "Tobias Keller",
    "imgTitle": "tokeller",
    "id": "5"
},{
	"url": "https://images.unsplash.com/photo-1505562130589-9879683e72da?ixlib=rb-0.3.5&s=91708e32452d631d515bfa79b77b0e40&auto=format&fit=crop&w=1350&q=80",
	"name": "Samuel Zeller",
    "imgTitle": "samuelzeller",
    "id": "6"
},{
	"url": "https://images.unsplash.com/photo-1482346577771-36a2bbe7f1b0?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fd303a547117865bd0a0181ceae09626&auto=format&fit=crop&w=1400&q=80",
	"name": "Matteo Fusco",
    "imgTitle": "matteofusco",
    "id": "7"
},{
	"url": "https://images.unsplash.com/photo-1486025402772-bc179c8dfb0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ede5306633e66e36d6ce5bfc5d5a059e&auto=format&fit=crop&w=1950&q=80",
	"name": "Joel Filipe",
    "imgTitle": "joelfilip",
    "id": "8"
},{
	"url": "https://images.unsplash.com/photo-1497897271578-5f45bb7a8400?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca4bbe5e61a473ddb32bac5eab4107c6&auto=format&fit=crop&w=1950&q=80",
	"name": "Igor Ovsyannykov",
    "imgTitle": "igorovsyannykov",
    "id": "9"
},{
	"url": "https://images.unsplash.com/photo-1504857561629-9c9b39e991bb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0b1f371a08c7dab7f25bc3586ceba39&auto=format&fit=crop&w=1352&q=80",
	"name": "Dmitri Popov",
    "imgTitle": "dmpop",
    "id": "10"
},{
	"url": "https://images.unsplash.com/photo-1510021115607-c94b84bceb1d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af0722591ba699585a9796332e8f74f7&auto=format&fit=crop&w=1942&q=80",
	"name": "David Clode",
    "imgTitle": "davidclode",
    "id": "11"
}]

module.exports = {
    getAll: (req, res) => {
        res.status(200).send(images)
    },
    postCard: (req, res) => {
        let { url, name, imgTitle } = req.body.card
        let newImg = {
            url: url,
            name: name,
            imgTitle: imgTitle,
            id: count
        }
        images.push(newImg)
        count++
        res.status(200)
    },
    delImg: (req, res) => {
        images.forEach((e, i, a) => {
            if(e.id == req.params.id) {
                images.splice(i, 1);
            }
        })
        res.status(200)
    },
    editImg: (req, res) => {
        let { url, name, imgTitle } = req.body.card
        images.forEach((e, i, a) => {
            if(e.id == req.params.id) {
                e.url = url
                e.name = name
                e.imgTitle = imgTitle
            }
        })
        res.status(200)
    }
}