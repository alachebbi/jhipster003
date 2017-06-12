import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiLanguageService, DataUtils } from 'ng-jhipster';
import { DossierMedical } from './dossier-medical.model';
import { DossierMedicalService } from './dossier-medical.service';

@Component({
    selector: 'jhi-dossier-medical-detail',
    templateUrl: './dossier-medical-detail.component.html'
})
export class DossierMedicalDetailComponent implements OnInit, OnDestroy {

    dossierMedical: DossierMedical;
    private subscription: any;

    constructor(
        private jhiLanguageService: JhiLanguageService,
        private dataUtils: DataUtils,
        private dossierMedicalService: DossierMedicalService,
        private route: ActivatedRoute
    ) {
        this.jhiLanguageService.setLocations(['dossierMedical']);
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.load(params['id']);
        });
    }

    load (id) {
        this.dossierMedicalService.find(id).subscribe(dossierMedical => {
            this.dossierMedical = dossierMedical;
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
