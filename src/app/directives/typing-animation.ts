import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { concatMap, delay, from, of } from 'rxjs';

//робить анімацію друку тексту

@Directive({
  selector: '[appTypingAnimation]',
  standalone: true,
})
export class TypingAnimation implements OnChanges{
    @Input() appTypingAnimation: string = '';
  @Input() typingSpeed: number = 50; // Speed in ms between each character

  constructor(private el: ElementRef, private renderer: Renderer2) { }


  ngOnChanges(changes: SimpleChanges): void {
     if (changes['appTypingAnimation']) {
      this.typeText();
    }
   
  }

  private typeText() {
    const text = this.appTypingAnimation;
    const textArray = text.split('');
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', '');
    
    from(textArray)
      .pipe(
        concatMap(char => of(char).pipe(delay(this.typingSpeed)))
      )
      .subscribe({
        next: (char) => {
          this.renderer.setProperty(
            this.el.nativeElement,
            'innerHTML',
            this.el.nativeElement.innerHTML + char
          );
        }
      });
  }
}
