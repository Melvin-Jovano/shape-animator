import { rows, columns, frames } from "./data";
import { print } from "./util";

frames.forEach(frame => {
    for (let row = 1; row <= rows; row++) {
        
        // TODO: Debugging Purpose
        process.stdout.write(`${row}\t`);
        // ENDTODO
        
        for (let column = 1; column <= columns; column++) {
            if(Object.keys(frame).map(key => Number(key)).includes(row)) {
                let isDisabled = false;
                frame[String(row)].forEach(disabledColumn => {
                    if(column >= disabledColumn[0] && column <= disabledColumn[1]) isDisabled = true;
                });
                if(isDisabled) print(column, true);
                else print(column);
            } else {
                print(column);
            }
        }
    }
});
