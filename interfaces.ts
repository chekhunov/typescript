interface Rect {
    readonly id: string,
    color?: string,
    size: {
    width: number,
    height: number
   }
};

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};

const rect2: Rect = {
    id: '12345',
    size: {
        width: 10,
        height: 20
    }
};

rect2.color = 'black';
// rect2.id='23534656'
const rect3 = {} as Rect
console.log(rect2)

interface RectWithArea extends Rect {
    getArea: ()=> number //number тип который будет возвращен
}

const rect4: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width = this.size.height
    }
}

interface Iclock {
    time: Date
    setTime(date: Date):void
}

class Clock implements Iclock {
    time:Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//======
interface Styles {
    // border:string
    [key: string]:string
    //таким образом мы определили все переменные в стринг в css обьекте
}

const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}