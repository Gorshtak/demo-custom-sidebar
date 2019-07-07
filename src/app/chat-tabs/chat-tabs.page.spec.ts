import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTabsPage } from './chat-tabs.page';

describe('ChatTabsPage', () => {
  let component: ChatTabsPage;
  let fixture: ComponentFixture<ChatTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
