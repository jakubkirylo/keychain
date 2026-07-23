import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YesNoToggleComponent } from './yes-no-toggle.component';

describe('YesNoToggleComponent', () => {
  let fixture: ComponentFixture<YesNoToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesNoToggleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YesNoToggleComponent);
    fixture.componentRef.setInput('value', false);
    fixture.detectChanges();
  });

  it('emits true after selecting "Tak"', () => {
    const emittedValues: boolean[] = [];
    fixture.componentInstance.valueChange.subscribe((value) => emittedValues.push(value));

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[1].click();

    expect(emittedValues).toEqual([true]);
  });

  it('does not emit when the selected value is clicked again', () => {
    const emittedValues: boolean[] = [];
    fixture.componentInstance.valueChange.subscribe((value) => emittedValues.push(value));

    const buttons = fixture.nativeElement.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
    buttons[0].click();

    expect(emittedValues).toEqual([]);
  });
});
