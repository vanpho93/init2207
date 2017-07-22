function inSoChan() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 2 === 0;
        if (dieuKien) console.log(i); 
    }
}

function inSoLe() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 2 === 1;
        if (dieuKien) console.log(i); 
    }
}

function inSoChiaHetCho3() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 3 === 0;
        if (dieuKien) console.log(i); 
    }
}

function inSoChiaCho4Du1() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = i % 4 === 1;
        if (dieuKien) console.log(i); 
    }    
}

function inSoChinhPhuong() {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = Math.sqrt(i) % 1 === 0;
        if (dieuKien) console.log(i); 
    }   
}

function inSo(fn) {
    for(let i = 1; i <= 100; i++) {
        const dieuKien = fn(i);
        if (dieuKien) console.log(i); 
    }   
}

function kiemTraChinhPhuong(a) { 
    return Math.sqrt(a) % 1 === 0 
};

inSo(i => i % 4 === 1);
inSo(i => i % 2 === 0);
