import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let myComponent: AppComponent;
  let myFixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents().then(() => {
      myFixture = TestBed.createComponent(AppComponent);
      myComponent = myFixture.componentInstance;
    });
  }));
  it('should create the app', async(() => {
    expect(myComponent).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    expect(myComponent.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    myFixture.detectChanges();
    const compiled = myFixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
  it('should render an h2 tag', async(() => {
    myFixture.detectChanges();
    const compiled = myFixture.debugElement.nativeElement;
    expect(compiled.querySelector('.h2tag').textContent).toContain('Here are some links to help you start:');
  }));

  it('should click button and change ptag', async(() => {
    myFixture.detectChanges();
    const compiled = myFixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ptag').textContent).toContain('false');
    spyOn(myComponent, 'onClick').and.callThrough();
    const myButton = myFixture.debugElement.query(By.css('.myButton'));
    myButton.triggerEventHandler('click', null);
    myFixture.detectChanges();
    expect(myComponent.onClick).toHaveBeenCalled();
    expect(compiled.querySelector('.ptag').textContent).toContain('true');
    expect(compiled.querySelector('.orange').textContent).toContain('Orange Kitty');
  }));

});
