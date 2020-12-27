import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  NgZone,
  ViewChild,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-google-autocomplete',
  templateUrl: './google-autocomplete.component.html',
  styleUrls: ['./google-autocomplete.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => GoogleAutocompleteComponent),
      multi: true,
    },
  ],
})
export class GoogleAutocompleteComponent implements AfterViewInit, ControlValueAccessor {
  @ViewChild('input') private inputElement: IonInput;

  @Input() disabled = false;

  @Input() iconName: string;

  @Input() placeholder: string;

  constructor(private ngZone: NgZone) {}

  async ngAfterViewInit() {
    const options = {
      types: ['(cities)'],
      fields: ['address_component'],
    };
    const input = await this.inputElement.getInputElement();
    const autocomplete = new google.maps.places.Autocomplete(input, options);
    autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = autocomplete.getPlace();
        const cityName = place.address_components[0]?.long_name;
        const countryName = place.address_components[2]?.long_name;
        this.writeValue(`${cityName}, ${countryName}`);
      });
    });
  }

  onChange = (value: string) => {};
  onTouched = () => {};

  writeValue(obj: any): void {
    this.onChange(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
