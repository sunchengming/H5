export function getInitTime(){
    const nowTime = new Date();
    const nowTimestamp = new Date().getTime();
    return {
        nowTime,
        nowTimestamp
    }

}
export function fn1(x,y){
    return x*y;
}

export var area = "shanghai"

export function circumference(radius){
    return 2*Math.PI*radius;
}