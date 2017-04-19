import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { DossierMedicalVF } from './dossier-medical-vf.model';
import { DossierMedicalVFService } from './dossier-medical-vf.service';

@Component({
    selector: 'jhi-dossier-medical-vf-detail',
    templateUrl: './dossier-medical-vf-detail.component.html'
})
export class DossierMedicalVFDetailComponent implements OnInit, OnDestroy {

    dossierMedicalVF: DossierMedicalVF;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private dossierMedicalVFService: DossierMedicalVFService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['dossierMedicalVF']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.dossierMedicalVFService.find(id).subscribe(dossierMedicalVF => {
            this.dossierMedicalVF = dossierMedicalVF;
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
