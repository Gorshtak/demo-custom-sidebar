import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatContentComponent } from './chat-content/chat-content.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import { ChatPage } from './chat.page';

const routes: Routes = [
    {
        path: '',
        component: ChatPage,
        children: [
            {
                path: '',
                component: ChatContentComponent
            },
            {
                path: 'details',
                component: ChatInfoComponent
            }
        ]
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [ChatPage, ChatContentComponent, ChatInfoComponent],
    exports: [ChatPage]
})
export class ChatPageModule {}
