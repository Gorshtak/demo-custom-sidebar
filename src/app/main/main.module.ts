import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatEmptyComponent } from './chat-empty/chat-empty.component';
import { MainPage } from './main.page';

const routes: Routes = [
    {
        path: '',
        component: MainPage,
        children: [
            {
                path: '',
                loadChildren: '../chat-tabs/chat-tabs.module#ChatTabsPageModule'
            },
            {
                path: 'groups/:id',
                loadChildren: './chat/chat.module#ChatPageModule'
            },
            {
                path: 'directs/:id',
                loadChildren: './chat/chat.module#ChatPageModule'
            },
            {
                path: 'patients/:id',
                loadChildren: './chat/chat.module#ChatPageModule'
            }
        ]
    }
];

@NgModule({
    entryComponents: [],
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [MainPage, ChatEmptyComponent]
})
export class MainPageModule {}
