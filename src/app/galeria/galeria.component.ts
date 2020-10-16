import { Component, OnInit } from '@angular/core';
import { GalleryPhoto } from '../models/gallery-photo';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  photos: GalleryPhoto[] = [];

  constructor() { }

  ngOnInit(): void {

    this.photos.push(new GalleryPhoto('Imagen 1', 'assets/img-gallery/image1.jpg'));
    this.photos.push(new GalleryPhoto('Imagen 2', 'assets/img-gallery/image2.jpg'));
    this.photos.push(new GalleryPhoto('Imagen 3', 'assets/img-gallery/image3.jpg'));
    this.photos.push(new GalleryPhoto('Imagen 4', 'assets/img-gallery/image4.jpg'));
    this.photos.push(new GalleryPhoto('Imagen 5', 'assets/img-gallery/image5.jpg'));
    this.photos.push(new GalleryPhoto('Imagen 6', 'assets/img-gallery/image6.jpg'));
  }

}
