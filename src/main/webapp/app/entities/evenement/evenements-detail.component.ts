import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {JhiLanguageService, DataUtils, AlertService} from 'ng-jhipster';
import { Evenement } from './evenement.model';
import { EvenementService } from './evenement.service';
import {Participation} from "../participation/participation.model";
import {ParticipationService} from "../participation/participation.service";
import {Response} from "@angular/http";

@Component({
    selector: 'jhi-evenement-detail',
    templateUrl: './evenements-detail.component.html'
})
export class EvenementsDetailComponent implements OnInit, OnDestroy {

    evenement: Evenement;
    participations: Participation [];
    private subscription: any;
    name:string;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private participationService : ParticipationService,
        private alertService: AlertService,
        private evenementService: EvenementService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['evenement']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    loadAll(nom) {
        this.participationService.query().subscribe(
            (res: Response) => {
                this.participations = res.json().filter(participation =>participation.evenement==nom);
            },
            (res: Response) => this.onError(res.json())
        );

    }
    private onError (error) {
        this.alertService.error(error.message, null, null);
    }
    load (id) {
        this.evenementService.find(id).subscribe(evenement => {
            this.evenement = evenement;
            this.name=this.evenement.nom;
            this.loadAll(this.name);


        });
    }
    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
