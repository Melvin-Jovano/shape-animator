import { rows, columns, frames, framesPerSecond, shape } from "./data";
import { print } from "./util";

let timer: number = 1;

frames.forEach(frame => {
    setTimeout(() => {
        console.clear();
        for (let row = 1; row <= rows; row++) {
        
            // TODO: Debugging Purpose
            process.stdout.write(`${row}\t`);
            // ENDTODO
    
            let rowData = '';
            for (let column = 1; column <= columns; column++) {
                if(Object.keys(frame).map(key => Number(key)).includes(row)) {
                    let isDisabled = false;
                    frame[String(row)].forEach(disabledColumn => {
                        if(column >= disabledColumn[0] && column <= disabledColumn[1]) isDisabled = true;
                    });
                    rowData += isDisabled ? ' ' : shape;
                } else {
                    rowData += shape;
                }
            }
            process.stdout.write(rowData + "\n");
        }
    }, (1000 / framesPerSecond) * timer);

    timer++;
});
