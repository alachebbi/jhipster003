import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {JhiLanguageService, EventManager, AlertService} from 'ng-jhipster';

import { ProfileService } from '../profiles/profile.service'; // FIXME barrel doesnt work here
import { JhiLanguageHelper, Principal, LoginModalService, LoginService, Account } from '../../shared';
import { Response } from '@angular/http';

import { Pipe, PipeTransform } from '@angular/core';



import {Doctor} from "../../entities/doctor/doctor.model";
import {DoctorService} from"../../entities/doctor/doctor.service";






import { VERSION, DEBUG_INFO_ENABLED } from '../../app.constants';

@Component({
    selector: 'jhi-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: [
        'navbar.css'
    ]
})
export class NavbarComponent implements OnInit {

    inProduction: boolean;
    doctor:Doctor[];
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
    modalRef: NgbModalRef;
    version: string;
    account: Account;

    constructor(
        private loginService: LoginService,
        private doctorService: DoctorService,
        private languageHelper: JhiLanguageHelper,
        private languageService: JhiLanguageService,
        private principal: Principal,
        private loginModalService: LoginModalService,
        private profileService: ProfileService,
        private eventManager: EventManager,
        private alertService: AlertService,
        private router: Router
    ) {
        this.version = DEBUG_INFO_ENABLED ? 'v' + VERSION : '';
        this.isNavbarCollapsed = true;
        this.loadAlldoc();

        this.languageService.addLocation('home');
    }

    ngOnInit() {this.loadAlldoc();
        this.principal.identity().then((account) => {
            this.account = account;


        });

        this.languageHelper.getAll().then((languages) => {
            this.languages = languages;
        });
        this.registerAuthenticationSuccess();
        this.profileService.getProfileInfo().subscribe(profileInfo => {
            this.inProduction = profileInfo.inProduction;
            this.swaggerEnabled = profileInfo.swaggerEnabled;
        });
    }

    loadAlldoc() {
        this.doctorService.query().subscribe(
            (res: Response) => {
                this.doctor = res.json();
            },
            (res: Response) => this.onError(res.json())
        );
    }
    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

    changeLanguage(languageKey: string) {
      this.languageService.changeLanguage(languageKey);
    }

    collapseNavbar() {
        this.isNavbarCollapsed = true;
    }

    isAuthenticated() {
        return this.principal.isAuthenticated();
    }

    login() {
        this.modalRef = this.loginModalService.open();
        this.loadAlldoc();
    }
    registerAuthenticationSuccess() {
        this.eventManager.subscribe('authenticationSuccess', (message) => {
            this.principal.identity().then((account) => {
                this.account = account;
                this.loadAlldoc();
            });
        });
    }
    logout() {
        this.collapseNavbar();
        this.loginService.logout();
        this.router.navigate(['']);
    }

    toggleNavbar() {
        this.isNavbarCollapsed = !this.isNavbarCollapsed;
    }

    getImageUrl() {
        return this.isAuthenticated() ? this.principal.getImageUrl() : null;
    }
}
