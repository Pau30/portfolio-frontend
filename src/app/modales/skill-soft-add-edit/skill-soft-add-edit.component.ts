import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillSoftService } from 'src/app/services/skill-soft.service';


@Component({
  selector: 'app-skill-soft-add-edit',
  templateUrl: './skill-soft-add-edit.component.html',
  styleUrls: ['./skill-soft-add-edit.component.css']
})
export class SkillSoftAddEditComponent {
  traerData: any;
  editar: any;
  addMode = true;
  id: any;

  ngOnInit() { }
  //Armado Formgroup
  public formEditSoft = new FormGroup({
    id: new FormControl({ value: 0, disabled: true }),
    nombre: new FormControl<string>('', Validators.compose([Validators.required])),
    imagen: new FormControl('', Validators.compose([Validators.required])),
    descripcion: new FormControl('', Validators.compose([Validators.required])),
  });

  constructor(
    private modalService: NgbModal,
    private skillSoftService: SkillSoftService
  ) { }

  //Da acceso al mismo elemento
  @ViewChild('content') editSoft!: ElementRef;

  //Metodos para tomar datos
  get Nombre() {
    return this.formEditSoft.get('nombre');
  }

  get Imagen() {
    return this.formEditSoft.get('imagen');
  }

  get Descripcion() {
    return this.formEditSoft.get('descripcion');
  }

  //Metodo para traer datos al modal

  onGet(id: any) {
    this.id = this.skillSoftService.verSkills(id);
    if (id === undefined) {
      this.addMode = true;
      this.formEditSoft.reset();
      console.log("paso 1");
    } else {
      this.addMode = false;
      this.skillSoftService.verSkills(id).subscribe((data) => {
        this.traerData = data;
        console.log("paso 2");
        this.formEditSoft.setValue({
          id: this.traerData.id,
          nombre: this.traerData.nombre,
          imagen: this.traerData.imagen,
          descripcion: this.traerData.descripcion,
        });
      }
      )
    };
    this.abrir();
  }

  //Metodo para abrir el modal
  abrir() {
    this.modalService.open(this.editSoft)
      .result.then((result) => { }, (reason) => { }
      );
  }


  //Metodo para guardar los cambios o avisar si hay error
  onSave(event: Event) {
    event.preventDefault;
    if (this.formEditSoft.valid) {
      this.skillSoftService.updateSkills(this.formEditSoft.getRawValue()).subscribe(data => {
        this.editar = data;
      })
      if (this.addMode) {
        alert("Skill agregada correctamente")
        window.location.reload();
      }
      if (!this.addMode) {
        alert("Skill editada correctamente")
        window.location.reload();
      }
    } else {
      alert("Error, intente nuevamente")
      this.formEditSoft.markAllAsTouched();
    }
  }
}
