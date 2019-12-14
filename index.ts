const w : number = window.innerWidth
const h : number = window.innerHeight
const scGap : number = 0.02
const nodes : number = 5
const delay : number = 30
const foreColor : string = "teal"
const backColor : string = "#BDBDBD"
const sizeFactor : number = 2.9

class ScaleUtil {

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}
