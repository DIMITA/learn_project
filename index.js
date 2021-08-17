function test (h) {
    let e = "t"
    console.log(' '.repeat(h) + e)
    
    for (let i = 0; i < h; i++) {
        e += "*t";
      console.log(' '.repeat(h - (1 + i)) + e)
     }
    }
    
    test(95);