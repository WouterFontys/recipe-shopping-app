import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePickerComponent } from './file-picker.component';
import {ReadModePipe} from "../read-mode.pipe";
import {FileHelpersModule} from "ngx-file-helpers";

describe('FilePickerComponent', () => {
  let component: FilePickerComponent;
  let fixture: ComponentFixture<FilePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePickerComponent, ReadModePipe],
      imports: [FileHelpersModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
