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

class DrawingUtil {

    static drawBouncyRect(context : CanvasRenderingContext2D, scale : number, size : number, gap : number) {
        const sf : number = ScaleUtil.sinify(scale)
        const y : number = size * sf
        context.save()
        context.translate(gap * scale, 0)
        context.fillRect(-size / 2, -size / 2 - y / 2, size, size / 2 + y / 2)
        context.restore()
    }

    static drawUDBRNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        const gap : number = w / (nodes + 1)
        const size : number = gap / sizeFactor
        context.fillStyle = foreColor 
        context.save()
        context.translate(gap * (i + 1), h / 2)
        DrawingUtil.drawBouncyRect(context, scale, size, gap)
        context.restore()
    }
}
