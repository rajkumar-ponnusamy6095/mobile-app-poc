import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  productDetails: any[] = [];
  pageId: number = 1;
  tableId: number = 1;

  constructor(private productService: ProductListService) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.productService.getProductDetails(this.pageId, this.tableId).subscribe((res:any)=>{
      this.productDetails = res.PRODUCTS;
      console.log('productDetails: ',this.productDetails);
    })
  }

  GoToNextPage() {
    this.pageId = this.pageId + 1;
    this.getProductDetails();
  }

  GoToPreviousPage() {
    this.pageId = this.pageId - 1;
    this.getProductDetails();
  }

}
