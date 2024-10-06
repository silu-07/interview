import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'customUpperCasepipe',
    standalone: true
})

export class customUpperCasepipe implements PipeTransform {
    transform(value: any) {
       if (typeof value !== 'string'){
        return value;
       }
    //    return value.charAt(0).toUpperCase() + value.slice(1);
    return value.replace(/\b\w/g, char => char.toUpperCase());
    }
}