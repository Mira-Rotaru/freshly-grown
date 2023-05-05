import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../Models/products';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private fs: Firestore) { }

  getProducts(): Observable<Product[]>{
    const productCollection: any = collection(this.fs, 'products');
    return collectionData(productCollection);
  }
}
