// we need to use some external data - JSON in this case
// we need ts-node
// we need a tsconfig.json
// we will import stuff
import * as pdata from './photos.json'

// some data
let photos:Array<Photo> = [ // or Photo[]
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    }
]
photos = pdata.photos // use our imported data

// here is a data type we will need
interface Photo { // intefaces are the recommended way to declare custom types
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    ooblywoobly?:any // an optional member
    pretty?:(x:boolean, y:{})=>{} // an optional method
}
// here is a class we will use
class Snap implements Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    constructor(snap:Photo){ // here Photo is a data type
        this.albumId      = snap.albumId
        this.id           = snap.id
        this.title        = snap.title
        this.url          = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    pretty():string{ // a method of a class
        return `${this.title}: ${this.url}`
    }
}

// using super
class LoRes extends Snap {
    constructor(snap:Photo){ // here our interface is used as a data type
        super(snap) // call the parent class constructor
        this.url = this.thumbnailUrl // only use low resolution images here
    }
}

// exercise the code
let s1 = new Snap(photos[160])
let s2 = new Snap({ // duck typing - if it looks like a Duck - it is a Duck
    "albumId": 1,
    "id": 14,
    "title": "est necessitatibus architecto ut laborum",
    "url": "https://via.placeholder.com/600/61a65",
    "thumbnailUrl": "https://via.placeholder.com/150/61a65"
  })

console.log(s1, s2)