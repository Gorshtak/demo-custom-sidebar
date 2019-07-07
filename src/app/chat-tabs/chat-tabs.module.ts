import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatTabsPage } from './chat-tabs.page';
import { DirectsComponent } from './directs/directs.component';
import { GroupsComponent } from './groups/groups.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
    {
        path: '',
        component: ChatTabsPage
    }
];

@NgModule({
    imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [ChatTabsPage, GroupsComponent, DirectsComponent, PatientsComponent],
    exports: [ChatTabsPage]
})
export class ChatTabsPageModule {}
