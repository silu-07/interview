import { AsyncPipe, DatePipe, DecimalPipe, LowerCasePipe, NgFor, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { customUpperCasepipe } from '../../pipe/customUpperCase.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [LowerCasePipe, UpperCasePipe, customUpperCasepipe, NgFor, AsyncPipe, DatePipe, DecimalPipe, PercentPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})

export class PipesComponent  {

  value: string = '';
  change(value: string) {
    this.value = value;
  }

  //asyncs pipe
  students = ['cat', 'apple', 'juice', 'mango'];

  totalStudents = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.students.length);
    }, 100)
  });

  //date pipe
  todaysDate = new Date();


}
