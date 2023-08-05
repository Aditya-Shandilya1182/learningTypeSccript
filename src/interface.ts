interface User{
    readonly id : number,
    email : string,
    userId : number,
    googleId ? : string,
    startTrail : () => string,
    getCoupon : (couponName : string) => number
}

const Travis: User ={ id: 4321, email: 't@t.com', userId: 1234, startTrail: () => {
    return 'Trail Started';
}, 
getCoupon : (couponName : string) => {
    console.log(couponName);
    return 10;
}}

interface TakePhoto {
    cameraMode: string,
    filter: string,
    burst: number
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}

class Youtube implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
}