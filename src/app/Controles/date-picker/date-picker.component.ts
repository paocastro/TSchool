import { Component,OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-date-picker',
    templateUrl: './date-picker.component.html',
    styleUrls: ['./date-picker.component.css']
})


export class DatePickerComponent implements OnInit {
  @Output() selectedDate = new EventEmitter<string>();;
  today:Date=new Date();  
  jYear:any = {};
  jDay:any = {};
  selectedYear:any ={};
  bSelectedYear:boolean=false;
  selectedMonth:any={};
  bSelectedMonth:boolean=false;
  selectedDay:any={};

  months = [
    {name: 'ENE', code: '01'},
    {name: 'FEB', code: '02'},
    {name: 'MAR', code: '03'},
    {name: 'ABR', code: '04'},
    {name: 'MAY', code: '05'},
    {name: 'JUN', code: '06'},
    {name: 'JUL', code: '07'},
    {name: 'AGO', code: '08'},
    {name: 'SEP', code: '09'},
    {name: 'OCT', code: '10'},
    {name: 'NOV', code: '11'},
    {name: 'DIC', code: '12'}
];


  constructor() { 
    this.fillArrayYears();
    
  }

  ngOnInit() {
    
  }

  chargeDate(dateIn){
    //console.log("this.dateIn")
    //console.log(dateIn)
    let newDate = new Date(dateIn);
    if (dateIn != undefined && dateIn != ""){
      this.selectedYear = this.jYear.Years.find(x => x.year==dateIn.substring(0,4));
      this.bSelectedYear = true;
      this.selectedMonth =this.months.find(x => x.code== dateIn.substring(5,7));
      this.selectMonthEvent();
      this.selectedDay = this.jDay.Days.find(x => (x.day= dateIn.substring(8,10)/1).toString());
      this.selectDayEvent();
    }
  }

  ///Arreglo con todos los añosdesde 1910 hasta el actual
  fillArrayYears(){
    var sJYear:string = '{"Years":[';
    for (var _i =  this.today.getFullYear(); _i > 1910; _i--) {
      sJYear = sJYear + '{"year":"' + _i + '"},';
    }
    sJYear = sJYear + '{"year":"'+ 1910 + '"}]}';

    this.jYear =  JSON.parse(sJYear);
  }//End fillArrayYears

  ///Arreglo de numeros desde 1 hasta iDays
  fillArrayDays(iDays){
    var sJDay:string = '{"Days":[';
    for (var _i = 1; _i < iDays; _i++) {
      sJDay = sJDay + '{"day":"' + _i + '"},';
    }
    sJDay = sJDay + '{"day":"'+ iDays + '"}]}';

    this.jDay =  JSON.parse(sJDay);
  }//End fillArrayDays
  
  
  ///Retorna el numero de días para el mes y año seleccionados
  getDaysByMonth():number{
    
    if(this.selectedMonth.code == "01" || this.selectedMonth.code == "03" || this.selectedMonth.code == "05" || 
    this.selectedMonth.code == "07" || this.selectedMonth.code == "08" || this.selectedMonth.code == "10" || this.selectedMonth.code == "12"){
      return 31;
    }
    
    if(this.selectedMonth.code == "04" || this.selectedMonth.code == "06" || this.selectedMonth.code == "09" || 
    this.selectedMonth.code == "11"){
      return 30;
    }

    if(this.selectedMonth.code == "02" && this.isLeapYear(this.selectedYear.year)){
      return 29;
    }else{
      return 28;
    }
  }//End getDaysByMonth

  ///Retorna si un año es bisiesto o no
  isLeapYear(year):boolean{
    if(year % 4 == 0){
      if(year % 100 == 0){
        if(year % 400 == 0){      
          return true;
        }
        else{
          return false;
        }
      }
      else{
        return true;
      }
    }
    else{
      return false;
    }
  }//End isLeapYear

  ///Evento al modificar el valor del año
  selectYearEvent(){
    this.selectedMonth=null;
    this.selectedDay=null;    
    this.bSelectedMonth =false;
    console.log(this.selectedYear);
    if(this.selectedYear!=null){
      this.bSelectedYear =true;
    }else{
      this.bSelectedYear =false;
    }
    this.selectedDate.emit(null);
  }//End selectYearEvent

  ///Evento al modificar el valor del mes
  selectMonthEvent(){
    this.selectedDay=null;
    if(this.selectedMonth!=null){
      let iDays:number = this.getDaysByMonth();      
      this.fillArrayDays(iDays);
      this.bSelectedMonth =true;
    }else{
      this.bSelectedMonth =false;
    }
    this.selectedDate.emit(null);
  }//End selectMonthEvent

  ///Evento al modificar el valor del día
  selectDayEvent(){
    if(this.selectedDay != null){
        let sFecha:string = this.selectedYear.year + "-" + this.selectedMonth.code + "-";
        if(this.selectedDay.day < 10){
            sFecha += "0";
        }
        sFecha += this.selectedDay.day;

        this.selectedDate.emit(moment(sFecha).format('YYYY-MM-DD'));
    }
  }//End selectDayEvent




}
