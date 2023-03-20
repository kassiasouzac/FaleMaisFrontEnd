import { Component, OnInit } from '@angular/core';
import { APIService  } from 'src/app/modules/service/api.service';
import { ICalculo, IDDD, IForm, IPlano } from 'src/app/modules/interface/IFaleMaisAPI';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent  implements OnInit{

  planos: IPlano[] = [];
  ddds: IDDD[] = [];
  calculos: ICalculo[] = []
  valorComPlano: number = 0;
  valorSemPlano: number = 0;

  public formCalculo: FormGroup = this.formBuilder.group({
    dddOrigem: ['', Validators.required],
    dddDestino: ['',Validators.required],
    minutos: [null, [Validators.required, Validators.minLength(1)]],
    planoId:[null, Validators.required]
  })

  constructor(private apiService: APIService, private formBuilder: FormBuilder) {}

   ngOnInit(): void {
      this.getPlanos();
      this.getDDD();
    }

  getPlanos(){
      this.apiService.getPlanos().subscribe(data =>{
        this.planos = data;
      })
    }

    getDDD(){
      this.apiService.getDDD().subscribe(data =>{
        this.ddds = data;
      })
   }

    onSubmit()
    {
      if(this.formCalculo.valid){


        var form : IForm = {
          dddOrigem: this.formCalculo.value.dddOrigem,
          dddDestino: this.formCalculo.value.dddDestino,
          minutos: this.formCalculo.value.minutos,
          planoId: this.formCalculo.value.planoId
        }

        this.apiService.submitCalc(form).subscribe(data =>{
          this.valorComPlano = data.valorComPlano;
          this.valorSemPlano = data.valorSemPlano;
        });

    }
  }
  }
