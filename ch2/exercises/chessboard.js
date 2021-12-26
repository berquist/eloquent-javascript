const dim = 20;

for (let ir = 0; ir < dim; ir++) {
    let line = "";
    for (let ic = 0; ic < dim; ic++) {
        if (ir % 2 == 0) {
            if (ic % 2 == 0) {
                line += " ";
            } else {
                line += "#";
            }
        } else {
            if (ic % 2 == 0) {
                line += "#";
            } else {
                line += " ";
            }
        }
        // let r2 = ir % 2 == 0;
        // let c2 = ic % 2 == 0;
        // if ((!ir) != (!ic)) {
        //     line += "#";
        // } else {
        //     line += " ";
        // }
    }
    console.log(line);
}
