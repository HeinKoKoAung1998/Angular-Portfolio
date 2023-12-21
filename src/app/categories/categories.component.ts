import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private categoryService: CategoriesService){}
  ngOnInit():void {

  }
  onSubmit(formData: any){
    let categoriesData = {
      category: formData.value.category,
    }

    this.categoryService.saveData(categoriesData)
  }
}
