import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormArray, FormControl } from '@angular/forms';
import { Notes } from '../../interfaces/notes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-note-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent {
  @Input() noteData?: Notes;
  @Output() formSubmit = new EventEmitter<Notes>();
  tagInput = new FormControl('');
  form!: FormGroup;
   @ViewChild('noteTextarea') noteTextarea!: ElementRef;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.noteData?.id ?? Date.now()],
      userId: [this.noteData?.userId ?? null],
      title: [this.noteData?.title ?? '', Validators.required],
      note: [this.noteData?.note ?? '', Validators.required],
      tags: this.fb.array(this.noteData?.tags?.map(tag => this.fb.control(tag)) ?? []),
      isFavourite: [this.noteData?.isFavourite ?? false],
      isArchived: [this.noteData?.isArchived ?? false],
      createdAt: [this.noteData?.createdAt ?? Date.now()],
    });
  }
  onInput() {
    const textarea = this.noteTextarea.nativeElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }


  get tags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  addTag(): void {
    this.tags.push(this.fb.control(''));
  }

  removeTag(index: number): void {
    this.tags.removeAt(index);
  }

  addTagFromInput() {
    const value = this.tagInput.value?.trim();
    if (value) {
      this.tags.push(new FormControl(value));
      this.tagInput.setValue('');
    }
  }

  reset() {
    this.form.reset()
  }

  handleTagInput(event: KeyboardEvent): void {
    const inputValue = this.tagInput.value;
    if (event.key === ',' && inputValue?.trim()) {
      event.preventDefault();
      this.addTagFromInput();
    }
  }


  submit() {
    this.onSubmit()
  }


  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

}
