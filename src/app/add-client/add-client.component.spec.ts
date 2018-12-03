import {ClientService} from '../services/client.service';
import {AngularFirestore, AngularFirestoreCollection, QueryFn,
  AngularFirestoreModule, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Client} from '../models/Client';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AddClientComponent} from './add-client.component';
import {environment} from '../../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

class AngularFirestoreMock extends AngularFirestore {
  public clientsCollection = (name: string, queryFn?: QueryFn): AngularFirestoreCollection<Client> => {
    const ref = this.firestore.collection('clients');
    // @ts-ignore
    return new AngularFirestoreCollection<Client>(ref, queryFn(ref));
  }
}

describe('ClientService without Angular testing support', () => {
  let clientService: ClientService;
  let component: AddClientComponent;
  let fixture: ComponentFixture<AddClientComponent>;
  let clientDoc: AngularFirestoreDocument<Client>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
        AngularFirestoreModule,
        AngularFireAuthModule],
      declarations: [AddClientComponent],
      providers: [{ 'provide': AngularFirestore, 'useValue': AngularFirestoreMock }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});

