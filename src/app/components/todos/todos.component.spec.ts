import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { waitForAsync } from '@angular/core/testing';
import { TodoService } from 'src/app/services/todo.service';


describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodosComponent]
    });
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
