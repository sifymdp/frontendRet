import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonModal } from '@ionic/angular/standalone';
import { MenuComponent } from "../menu/menu.component";
import { IonicSlides, IonPopover, PopoverController } from '@ionic/angular';
import { NgbTooltip, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PopoverComponent } from '../popover/popover.component';
import { CommandsComponent } from '../commands/commands.component';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    styleUrls: ['./categories.page.scss'],
    standalone: true,
    imports: [ CommonModule, FormsModule, MenuComponent, NgbTooltipModule, IonModal],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CategoriesPage implements OnInit {

  @ViewChild(IonModal) modal?: IonModal;
  @ViewChild('popover') popover: any;

  @ViewChild('micButton', { read: ElementRef, static: true }) micButton!: ElementRef;

  isOpen = false;

  isArrow = true

  swiperModules = [IonicSlides];
  showMore:boolean = false;
  categories: any = [
    {
      id: 1,
      img: {
        src: '/assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 1'
    },
    {
      id: 2,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 2'
    },
    {
      id: 3,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 3'
    },
    {
      id: 4,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 4'
    },
    {
      id: 5,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 5'
    },
    {
      id: 6,
      img: {
        src: 'assets/imgs/category.png',
        alt: 'Category'
      },
      name: 'Category 6'
    }
  ]
  order_again = [
    {
      id: 1,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    },
    {
      id: 2,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    },
    {
      id: 3,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    },
    {
      id: 4,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
    },
  ]
  price_details = [
    {
      id: '1',
      price: '200.00',
      qty: '1 - 99'
    },
    {
      id: '2',
      price: '150.00',
      qty: '100 - 499'
    },
    {
      id: '3',
      price: '126.00',
      qty: '500 +'
    }
  ]
  order_details = 
    {
      id: 1,
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      },
      icon: '/assets/imgs/star-unliked.svg',
      brand_name: 'Fortune',
      product_name: 'Refined Sunflower Oil',
      unit_cross_quantity: '20 ut x 500 ml',
      rate: '₹ 126.00',
      offer: '45% Off!',
      uom: 'Each',
      qty: '40'
  }
  product_images: any[] = [
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
    {
      img: {
        src: 'assets/imgs/product.png',
        alt: 'product'
      }
    },
  ];

  private pressTimer: any;

  constructor(private popoverController: PopoverController) { }

  ngOnInit() {
  }

  showMenu(event: any){
    console.log('Menu showed!')
  }

  handleTouchStart(event: TouchEvent){
    this.pressTimer = setTimeout(() => {
      this.onLongPress();
    }, 2000);
  }

  handleTouchEnd(event: TouchEvent) {
    clearTimeout(this.pressTimer);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  async onLongPress() {
    const popover = await this.popoverController.create({
      component: CommandsComponent,
      cssClass: 'commands',
      translucent: true,
      event: event,
      reference: 'trigger',
      mode: 'ios',
      side: 'start',
      alignment: 'start',
      backdropDismiss: true,
      showBackdrop: true
    });
    await popover.present();
    // console.log('Long press detected!');
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'popover-position-adjustment',
      translucent: true,
      event: event,
      reference: 'trigger',
      mode: 'ios',
      side: 'start',
      alignment: 'start',
      backdropDismiss: true,
      showBackdrop: true
    });
    await popover.present();
    setTimeout(() => popover.dismiss(),3000)
  }

  showMoreDesc(ev: any){
    this.showMore = !this.showMore;
    if(this.micButton){
      setTimeout(() => {
        const element = this.micButton.nativeElement;
        const rect = element.getBoundingClientRect()
        const event = { target: { getBoundingClientRect: () => rect } } as any;
        this.presentPopover(event);
      },0)
    }
  }

  reset(event: any){
  }

  openModal(){
    this.modal?.present()
  }

  add(){
    // model.dismiss();
    let msg = document.getElementById("success-message")!;
    msg.style.display = "block";
  }

  decrease(){}
  
  increase(){}

  filterTab(event: any){
  }

  toggleLiked(order: any) {
    if (order.icon === '/assets/imgs/star-liked.svg') {
      order.icon = '/assets/imgs/star-unliked.svg';
    } else {
      order.icon = '/assets/imgs/star-liked.svg';
    }
  }

}