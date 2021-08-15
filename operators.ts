interface Person {
    name: string
    age: number 
}

type PersonKeys = keyof Person // 'name' | 'age'

let key:PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNiMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //'name' | 'email' не покажет id createdAt
type UserKeysNiMeta2 = Pick<User, 'name' | 'email'> //'name' | 'email' вернет

lety u1: UserKeysNiMeta1 = 'name'
// u1 = '_id' //будет ошибка потому что в методе UserKeys... не определено